package database

import (
	"context"
	"fmt"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var (
	Client *mongo.Client
	User   *mongo.Collection
)

func DBset() *mongo.Client {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")

	client, err := mongo.Connect(ctx, clientOptions)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Successfully connected to the mongodb")

	Client = client
	User = UserData(client, "users")

	return client
}

func CloseDB() {
	err := Client.Disconnect(context.Background())

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Connected to MongoDb closed.")
}

func UserData(client *mongo.Client, collectionName string) *mongo.Collection {
	var collection *mongo.Collection = client.Database("storage-rack").Collection(collectionName)
	return collection
}

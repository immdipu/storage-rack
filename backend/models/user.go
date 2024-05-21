package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
	ID             primitive.ObjectID `json:"_id" bson:"_id"`
	FirstName      string             `json:"firstName" bson:"firstName"`
	LastName       string             `json:"lastName" bson:"lastName"`
	Email          string             `json:"email" bson:"email"`
	Password       string             `json:"password" bson:"password"`
	Token          string             `json:"token" bson:"token"`
	SignWithGoogle bool               `json:"signwithgoogle" bson:"signwithgoogle"`
	CreatedAt      time.Time          `json:"created_at" bson:"created_at"`
}

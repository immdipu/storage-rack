package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
	ID             primitive.ObjectID `json:"_id" bson:"_id"`
	FullName       string             `json:"fullname" bson:"fullname"`
	Email          string             `json:"email" bson:"email" validate:"required,email"`
	Username       string             `json:"username" bson:"username"`
	Picture        string             `json:"picture" bson:"picture"`
	Password       string             `json:"password" bson:"password"`
	Token          string             `json:"token" bson:"token"`
	SignWithGoogle bool               `json:"signwithgoogle" bson:"signwithgoogle"`
	CreatedAt      time.Time          `json:"created_at" bson:"created_at"`
}

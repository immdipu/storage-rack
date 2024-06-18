package controllers

import (
	"net/http"
	"storagerack/database"
	"storagerack/models"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type RequestBody struct {
	Username string `json:"username"`
	Password string `json:"password"`
	Email    string `json:"email"`
}

var validate = *validator.New(validator.WithRequiredStructEnabled())

func CreateUser(c *gin.Context) {
	var user models.User

	err := c.BindJSON(&user)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "missing fields",
			"error":   err.Error(),
		})
		return
	}

	count, err := database.User.CountDocuments(c, bson.M{"email": user.Email})

	println(count)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "Something went wrong. Please try again!",
			"status":  false,
		})
		return
	}

	if count > 0 {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "User already exist.  Please try again!",
			"status":  false,
		})
		return
	}

	user.ID = primitive.NewObjectID()
	user.CreatedAt, _ = time.Parse(time.RFC3339, time.Now().Format(time.RFC3339))

	_, err = database.User.InsertOne(c, user)

	if err != nil {
		c.JSON(http.StatusRequestTimeout, gin.H{
			"message": "failed to create user",
			"status":  false,
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"_id":        user.ID,
		"firstName":  user.FirstName,
		"lastName":   user.LastName,
		"email":      user.Email,
		"created_at": user.CreatedAt,
	})
}

func GoogleLogin(c *gin.Context) {
	var googleToken GoogleRequestBody

	err := c.ShouldBindJSON(&googleToken)

	if err != nil {
		SendError(c, 400, "Missing fields")
		return
	}

	err = validate.Struct(googleToken)

	if err != nil {
		SendError(c, 400, "Missing fields or invalid fields")
		return
	}

}

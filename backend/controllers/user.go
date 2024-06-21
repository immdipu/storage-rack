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
		"fullname":   user.FullName,
		"email":      user.Email,
		"created_at": user.CreatedAt,
	})
}

func GoogleLogin(c *gin.Context) {
	var googleData models.User

	err := c.ShouldBindJSON(&googleData)

	uniquename := GenerateUniqueUsername("dipu")

	if err != nil {
		SendError(c, 400, "Missing fields")
		return
	}

	err = validate.Struct(googleData)

	if err != nil {
		SendError(c, 400, "Missing fields or invalid fields")
		return
	}

	count, errr := database.User.CountDocuments(c, bson.M{"email": googleData.Email})

	if errr != nil {
		SendError(c, 400, "Something went wrong, Please try again")
		return
	}

	if count > 0 {

		var user models.User

		err = database.User.FindOne(c, bson.M{"email": googleData.Email}).Decode(&user)

		if err != nil {
			SendError(c, 400, "Something went wrong, Please try again")
			return
		}

		c.JSON(http.StatusOK, gin.H{
			"success": true,
			"message": "Successfully logged in",
			"data": gin.H{
				"_id":            user.ID,
				"fullName":       user.FullName,
				"email":          user.Email,
				"username":       user.Username,
				"token":          "123456",
				"picture":        googleData.Picture,
				"signwithgoogle": true,
				"created_at":     user.CreatedAt,
			},
		})
		return
	}

	googleData.Username = uniquename
	googleData.ID = primitive.NewObjectID()
	googleData.CreatedAt, _ = time.Parse(time.RFC3339, time.Now().Format(time.RFC3339))

	_, err = database.User.InsertOne(c, googleData)

	if err != nil {
		SendError(c, 500, "Failed to create new user, Please try again")
		return
	}

	c.JSON(http.StatusAccepted, gin.H{
		"succes":  true,
		"message": "Successfully registered. Welcome to StorageRack",
		"data": gin.H{
			"_id":            googleData.ID,
			"fullName":       googleData.FullName,
			"email":          googleData.Email,
			"username":       googleData.Username,
			"token":          "123456",
			"picture":        googleData.Picture,
			"signwithgoogle": true,
			"created_at":     googleData.CreatedAt,
		},
	})

}

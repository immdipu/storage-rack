package controllers

import (
	"net/http"
	"storagerack/models"

	"github.com/gin-gonic/gin"
)

type RequestBody struct {
	Username string `json:"username"`
	Password string `json:"password"`
	Email    string `json:"email"`
}

func CreateUser(c *gin.Context) {
	var user models.User

	err := c.BindJSON(&user)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	count, err :=

		c.JSON(http.StatusOK, gin.H{
			"message":  "User created",
			"username": req.Username,
			"email":    req.Email,
		})
}

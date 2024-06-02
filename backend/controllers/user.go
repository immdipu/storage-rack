package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type RequestBody struct {
	Username string `json:"username"`
	Password string `json:"password"`
	Email    string `json:"email"`
}

func CreateUser(c *gin.Context) {
	var req RequestBody

	err := c.ShouldBindBodyWithJSON(&req)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
	}

	c.JSON(http.StatusOK, gin.H{
		"message":  "User created",
		"username": req.Username,
		"email":    req.Email,
	})
}

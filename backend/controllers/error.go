package controllers

import "github.com/gin-gonic/gin"

func SendError(c *gin.Context, status int, message string) {
	c.JSON(status, gin.H{
		"success": false,
		"message": message,
	})
}

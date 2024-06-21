package routes

import (
	"storagerack/controllers"

	"github.com/gin-gonic/gin"
)

func UserRoutes(router *gin.Engine) {
	router.POST("/api/signup", controllers.CreateUser)
	router.POST("api/google-login", controllers.GoogleLogin)

}

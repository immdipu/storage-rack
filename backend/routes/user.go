package routes

import (
	"storagerack/controllers"

	"github.com/gin-gonic/gin"
)

func UserRoutes(router *gin.Engine) {
	router.POST("/api/user", controllers.CreateUser)
}

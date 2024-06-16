package main

import (
	"log"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"

	"storagerack/database"
	"storagerack/routes"
)

func main() {
	godotenv.Load()
	database.DBset()

	defer database.CloseDB()

	port := os.Getenv("PORT")

	if port == "" {
		port = "8080"
	}
	router := gin.Default()

	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:4321"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
		AllowHeaders:     []string{"Origin", "Content-Type"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
			return origin == "http://localhost:4321"
		},
		MaxAge: 12,
	}))

	routes.UserRoutes(router)
	log.Fatal(router.Run(":" + port))
}

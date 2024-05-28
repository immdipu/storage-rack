package main

import (
	"log"
	"os"

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
	routes.UserRoutes(router)
	log.Fatal(router.Run(":" + port))
}

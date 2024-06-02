package main

import (
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"

	"storagerack/database"
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

	log.Fatal(router.Run(":" + port))
}

package controllers

type GoogleRequestBody struct {
	Email    string `json:"email" validate:"required,email"`
	FullName string `json:"name" validate:"required"`
	Picture  string `json:"picture"`
	Username string `json:"username"`
}

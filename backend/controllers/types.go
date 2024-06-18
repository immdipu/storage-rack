package controllers

type GoogleRequestBody struct {
	Token string `json:"token" validate:"required,alphanum,min=10,max=1000"`
}

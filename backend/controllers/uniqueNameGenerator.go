package controllers

import (
	"github.com/rs/xid"
)

var guid = xid.New()

func GenerateUniqueUsername(name string) string {
	uniqueName := guid.String() + name
	return uniqueName
}

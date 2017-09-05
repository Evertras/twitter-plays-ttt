#!/bin/bash

read -p "Consumer Key: " consumer_key
read -p "Consumer Secret: " consumer_secret
read -p "Access Token Key: " access_key
read -p "Access Token Secret: " access_secret

export TWITTER_CONSUMER_KEY=$consumer_key
export TWITTER_CONSUMER_SECRET=$consumer_secret
export TWITTER_ACCESS_TOKEN_KEY=$access_key
export TWITTER_ACCESS_TOKEN_SECRET=$access_secret

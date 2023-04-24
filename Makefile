up:
	@docker-compose stop && docker-compose up --build -d --remove-orphans

down:
	@docker-compose stop
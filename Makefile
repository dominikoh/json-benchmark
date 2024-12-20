help: ## show help message
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\033[36m\033[0m\n"} /^[$$()% 0-9a-zA-Z_\-\/]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

.PHONY: install
install:	## install dependencies
	npm ci

.PHONY: build
build:	clean ## build dependencies
	nx build data-protobuf
	npm install

.PHONY: bench
bench: build  ## run benchmark
	nx serve json-benchmark

.PHONY: clean
clean:	## clean build
	rm -rf dist
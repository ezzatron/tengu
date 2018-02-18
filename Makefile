.DEFAULT_GOAL := test

SHELL := /bin/bash -o pipefail

SRC := $(shell find ./src 2> /dev/null)
TEST_SRC := $(shell find ./test -type f 2> /dev/null)

.PHONY: test
test: node_modules $(SRC) $(TEST_SRC)
	NODE_ENV=test node_modules/.bin/mocha 'test/suite/**/*.spec.*'

.PHONY: coverage
coverage: artifacts/tests/coverage/index.html

.PHONY: coverage-open
coverage-open: | artifacts/tests/coverage/index.html
	open artifacts/tests/coverage/index.html

.PHONY: lint
lint: node_modules
	node_modules/.bin/eslint --fix --ext .js --ext .jsx .

.PHONY: release-lint
release-lint:: node_modules
	node_modules/.bin/eslint --fix --ext .js --ext .jsx . --config .eslintrc.release.json

.PHONY: debug
debug: node_modules $(SRC)
	rm -rf web
	node_modules/.bin/webpack --debug

.PHONY: release
release: node_modules $(SRC)
	rm -rf web
	node_modules/.bin/webpack -p

.PHONY: run
run: node_modules
	node_modules/.bin/webpack-dev-server

.PHONY: clean-all
clean-all:: clean
	rm -rf ./node_modules

.PHONY: clean
clean::
	git clean -dX --force --exclude !/node_modules/

.PHONY: clean-coverage
clean-coverage:
	rm -rf artifacts/tests/coverage

.PHONY: prepare
prepare: test release-lint

.PHONY: ci
ci: test release-lint

node_modules: yarn.lock
	yarn install
	@touch $@

yarn.lock: package.json
	yarn check --integrity || yarn upgrade
	@touch $@

artifacts/tests/coverage/index.html: artifacts/tests/coverage/nyc
	node_modules/.bin/nyc report --temp-directory $< --report-dir $(@D) --reporter=html

artifacts/tests/coverage/nyc: node_modules $(SRC) $(TEST_SRC)
	@mkdir -p $@
	NODE_ENV=test node_modules/.bin/nyc --temp-directory $@ --all --include 'src/**/*.js*' --extension .jsx node_modules/.bin/mocha test/suite
	@touch $@

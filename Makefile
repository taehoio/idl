.PHONY: install-tools
install-tools:
	@echo Installing tools from tools.go
	@cat tools.go | grep _ | awk -F'"' '{print $$2}' | xargs -tI % go install %

.PHONY: lint
lint: install-tools
	buf lint

.PHONY: format
format: install-tools
	buf format -w

.PHONY: generate
generate: install-tools
	buf generate

.PHONY: clean
clean:
	rm -rf gen

.PHONY: diff
diff:
	git diff --exit-code
	if [ -n "$(git status --porcelain)" ]; then git status; exit 1; else exit 0; fi

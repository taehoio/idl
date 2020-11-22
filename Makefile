
.PHONY: lint
lint:
	./scripts/lint.sh

.PHONY: generate
generate:
	./scripts/generate.sh

.PHONY: generate-changed-protos-only
generate-changed-protos-only:
	./scripts/generate-changed-protos-only.sh

.PHONY: clean
clean:
	rm -rf gen

.PHONY: diff
diff:
	git diff --exit-code
	./scripts/diff.sh

.PHONY: format
format:
	./scripts/format.sh

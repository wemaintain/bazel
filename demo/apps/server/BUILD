
load("@npm_bazel_typescript//:index.bzl", "ts_library")
load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_binary")

ts_library(
    name = "server_lib",
    srcs = glob(
        ["*.ts"],
    ),
    deps = [
        "@npm//@types/node",
        "@npm//koa",
        "@npm//koa-router",
        "//libs/add",
        "//libs/subtract"
    ],
)

nodejs_binary(
    name = "server",
    data = [
        ":server_lib",
    ],
    entry_point = ":index.ts",
)

This is a repo for testing next.js rewrites via config & middleware.

## Usage notes

* middleware adds a query param (`foo=bar`), a header (`my-header=baz`) & a cookie (`my-cookie=xyz`)
* `/api/node` => node api route
* `/api/edge` => edge api route
* `/gssp-node` => page with gssp on node runtime
* `/gssp-edge` => page with gssp on edge runtime
* `/config-node` => config-based rewrite to `/api/node-config` (middleware is skipped)
* `/config-edge` => config-based rewrite to `/api/edge-config` (middleware is skipped)
* `/config-gssp` => config-based rewrite `/gssp-config` (middleware is skipped)
* add `rewrite_to=/any-path` query param to rewrite to a path
* add `rewrite_to=https://any-url.com` query param to rewrite to a URL (e.g. to do an external rewrite)
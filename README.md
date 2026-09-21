# Tugu Keris Siginjai — Panduan Independen Kota Jambi

这是一个为 **Tugu Keris Siginjai（Monument of Keris Siginjai Jambi）** 制作的双语静态旅游信息网站。访客页面提供 Bahasa Indonesia（默认 `/`）与 English（`/en/`）两种版本，且每个页面均有语言切换入口。项目采用 Astro、Tailwind CSS、TypeScript 与 Cloudflare Workers Static Assets 模式；网站不包含数据库、登录或 CMS。

## 快速开始

项目锁定 Node.js `22.13.0` 与 pnpm `10.11.1`。请先在环境中启用 Corepack，然后执行以下命令：

```bash
corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

如本地 Corepack 存在签名缓存问题，可使用项目锁定的同版本 pnpm 运行等效命令：

```bash
pnpm dlx pnpm@10.11.1 install --frozen-lockfile
pnpm dlx pnpm@10.11.1 check
pnpm dlx pnpm@10.11.1 build
```

## Cloudflare Workers Static Assets 部署

`wrangler.jsonc` 采用 `assets.directory: ./dist`，因此 Astro 完成静态构建后可由 Workers Static Assets 直接托管。部署前请通过 Cloudflare 登录，并执行：

```bash
pnpm deploy
```

## 域名配置

生产域名固定为 `https://kerisjambi.com`（见 `astro.config.mjs` 中的 `PRODUCTION_SITE`）。该值确保 canonical、Open Graph 绝对 URL 与 sitemap 始终产出，避免 `http://` 与 `https://` 两个版本被搜索引擎重复收录。如需覆盖，可设置环境变量 `PUBLIC_SITE_URL`，它会优先生效。

```bash
PUBLIC_SITE_URL=https://domain-anda.id
```

## 内容与数据边界

网站将地图评分、开放条件、停车与交通安排标注为会变动的信息，并提示访客在出行前确认。资料来源及照片授权见 `ATTRIBUTION.md`，构建与浏览器自检见 `TESTING.md`。

# MCP Servers & Ecosystem

> The MCP server ecosystem encompasses community-built connectors that expose databases, developer tools, cloud platforms, and local filesystems directly to MCP-compliant AI assistants.

## 🎯 What to Learn

- Reference MCP servers: filesystem, SQLite, PostgreSQL, GitHub, Slack, and Fetch
- Building custom servers with FastMCP (Python) and MCP SDK (TypeScript)
- Authentication, OAuth flows, and secret management for MCP servers
- Dockerizing MCP servers for containerized host execution
- Community discovery registries: Awesome MCP Servers and MCP Hub

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Official Model Context Protocol Reference Servers](https://github.com/modelcontextprotocol/servers)
  - Type: Official Reference Repository
  - Language: English
  - Level: Intermediate
  - Why recommended: Anthropic's official collection of reference MCP servers, providing production-grade implementations for Git, GitHub, PostgreSQL, Brave Search, Slack, and local filesystems.

### 📖 Documentation & References

- [MCP Reference Servers Documentation](https://github.com/modelcontextprotocol/servers) — Installation instructions and usage guides for official MCP servers.
- [Awesome MCP Servers Directory](https://github.com/punkpeye/awesome-mcp-servers) — Curated list of 100+ community-built MCP servers across tools and APIs.

### 🎓 Courses

- [Building Custom MCP Servers (Hugging Face / Anthropic Tutorials)](https://modelcontextprotocol.io/) — Tutorials on writing servers, handling errors, and publishing MCP connectors.

### ▶️ YouTube — English

- [LangChain: Video Guides & Tutorials](https://www.youtube.com/@LangChain)
  - Channel: LangChain
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Step-by-step tutorial building a custom database MCP server and hooking it up to Claude.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Building Microservices: Designing Fine-Grained Systems](https://www.oreilly.com/library/view/building-microservices-2nd/9781492034018/) — Sam Newman guide to microservice architectures, API boundaries, and RPC communication.

### 💻 GitHub / Implementations

- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — Reference implementations for Model Context Protocol servers.
- [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) — A curated list of Model Context Protocol (MCP) servers.

## 📄 Foundational Papers

- [Standardizing Foundation Model Tool Calling with MCP](https://modelcontextprotocol.io/) — Anthropic whitepaper introducing the motivation, architecture, and roadmap of the Model Context Protocol.

### 🧪 Practice

- [MCP Inspector](https://github.com/modelcontextprotocol/inspector) — Interactive developer tool to test, inspect, and debug MCP servers directly in your browser.

### 🛠️ Projects

- [Custom Notion & JIRA MCP Server](https://github.com/modelcontextprotocol/servers) — Build a custom Python FastMCP server that connects to company Notion and JIRA instances, allowing Claude to triage tickets.

## 🧭 Recommended Learning Path

1. Install and test the official `filesystem` and `sqlite` MCP servers with Claude Desktop.
2. Use the `@modelcontextprotocol/inspector` to test server responses interactively.
3. Write a custom FastMCP server exposing internal business logic in 20 lines of Python.
4. Package your MCP server into a Docker image with environment variable secrets.
5. Contribute your server to the open-source Awesome MCP Servers index.

## ⭐ Top 3 Resources

1. Official MCP Servers (modelcontextprotocol/servers)
2. Awesome MCP Servers (punkpeye/awesome-mcp-servers)
3. MCP Inspector (modelcontextprotocol/inspector)


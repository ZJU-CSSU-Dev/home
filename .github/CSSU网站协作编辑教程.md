# CSSU 网站协作编辑教程

> 本文档面向零基础同学，从零开始教你如何在 GitHub 上协作编辑网站内容。
> 按顺序完成每一步即可，命令可以直接复制粘贴。

---

## 目录

1. [注册 GitHub 账号](#1-注册-github-账号)
2. [安装 Git](#2-安装-git)
3. [安装 Python](#3-安装-python)
4. [配置科学上网（代理）](#4-配置科学上网代理)
5. [配置 Git 用户信息](#5-配置-git-用户信息)
6. [Fork 仓库](#6-fork-仓库)
7. [Clone 仓库到本地](#7-clone-仓库到本地)
8. [本地预览网站](#8-本地预览网站)
9. [用 VS Code 编辑网站内容](#9-用-vs-code-编辑网站内容)
10. [Markdown 语法速查](#10-markdown-语法速查)
11. [提交并推送修改](#11-提交并推送修改)
12. [发起 Pull Request](#12-发起-pull-request)
13. [后续更新：同步最新版本](#13-后续更新同步最新版本)

---

## 1. 注册 GitHub 账号

1. 打开浏览器，访问 [https://github.com](https://github.com)
2. 点击右上角 **Sign up**
3. 输入邮箱地址，点击 **Create account**
4. 按提示完成验证（可能需要输入验证码）
5. 设置用户名和密码（用户名会出现在你的仓库链接中，建议用英文名）
6. 注册完成后登录

---

## 2. 安装 Git

### Windows

1. 访问 [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. 下载会自动开始，双击安装
3. 安装过程中**全部保持默认选项**，一路点 Next
4. 安装完成后，打开 **PowerShell** 或 **CMD**，输入：

```powershell
git --version
```

如果显示类似 `git version 2.45.0` 的内容，说明安装成功。

### Mac

打开终端，输入：

```bash
git --version
```

如果没有安装，系统会提示你安装 Xcode Command Line Tools，按提示操作即可。

---

## 3. 安装 Python

CSSU 网站使用 MkDocs 构建，MkDocs 是 Python 工具。安装 Python 后可以在本地预览网站效果，确认修改无误再推送。

### Windows

1. 访问 [https://www.python.org/downloads/](https://www.python.org/downloads/)
2. 点击 **Download Python 3.x.x** 下载安装包
3. 双击运行安装程序
4. **重要：** 勾选底部的 **Add Python to PATH**，然后点击 **Install Now**
5. 安装完成后，打开 PowerShell，输入：

```powershell
python --version
```

如果显示类似 `Python 3.12.0` 的内容，说明安装成功。

### Mac

Mac 通常自带 Python 3。打开终端输入：

```bash
python3 --version
```

如果没有，通过 Homebrew 安装：

```bash
brew install python
```

---

## 4. 配置科学上网（代理）

由于 GitHub 服务器在国外，国内直连不稳定，需要配置代理。

### 4.1 安装代理工具

推荐使用 **Clash for Windows** 或 **Clash Verge**：

- Clash Verge 下载：[https://github.com/clash-verge-rev/clash-verge-rev/releases](https://github.com/clash-verge-rev/clash-verge-rev/releases)
- 下载对应系统的版本，解压后运行

### 4.2 导入订阅

1. 打开 Clash Verge
2. 点击左侧 **Profiles**（配置）
3. 点击 **New**，粘贴你的订阅链接（向提供网络的同学获取）
4. 点击 **Activate** 激活配置
5. 回到 **Proxies**（代理）页面，选择一个节点
6. 开启 **System Proxy**（系统代理）

### 4.3 确认代理端口

在 Clash Verge 界面中查看端口号，通常是 **7890** 或 **7891**。

### 4.4 给 Git 设置代理

打开 PowerShell 或 CMD，**逐行复制粘贴**以下命令（将端口号替换为你实际的端口）：

```powershell
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy http://127.0.0.1:7890
```

### 4.5 验证代理是否生效

```powershell
git config --global --get http.proxy
```

如果返回 `http://127.0.0.1:7890`，说明设置成功。

> **注意：** 每次使用 Git 之前，请确保 Clash 等代理软件正在运行。

---

## 5. 配置 Git 用户信息

Git 需要知道你是谁，每次提交都会记录这个信息。

```powershell
git config --global user.name "你的GitHub用户名"
git config --global user.email "你的GitHub注册邮箱"
```

例如：

```powershell
git config --global user.name "zhangsan"
git config --global user.email "zhangsan@example.com"
```

---

## 6. Fork 仓库

Fork 就是把别人的仓库复制一份到你自己的 GitHub 账号下。

1. 打开浏览器，访问原仓库地址：[https://github.com/ZJU-CSSU-Dev/home](https://github.com/ZJU-CSSU-Dev/home)
2. 点击右上角的 **Fork** 按钮
3. 在弹出页面中点击 **Create fork**
4. 等待几秒，完成后你会在自己的账号下看到一个 `home` 仓库

此时你的仓库地址为：
```
https://github.com/你的用户名/home
```

---

## 7. Clone 仓库到本地

Clone 就是把 GitHub 上的仓库下载到你的电脑上。

### 7.1 选择存放位置

打开 PowerShell，进入你想存放仓库的目录，例如桌面：

```powershell
cd $HOME\Desktop
```

### 7.2 执行 Clone

```powershell
git clone https://github.com/你的用户名/home.git
```

将 `你的用户名` 替换为你的实际 GitHub 用户名。

### 7.3 进入仓库目录

```powershell
cd home
```

此时你可以用 `ls` 或 `dir` 查看仓库中的文件。

---

## 8. 本地预览网站

在推送修改之前，可以先在本地启动网站预览，确认效果无误。

### 8.1 安装 MkDocs 依赖

在仓库目录下执行：

```powershell
pip install mkdocs-material
```

> 如果提示 `pip` 不是内部命令，尝试用 `python -m pip install mkdocs-material`。

### 8.2 启动本地预览服务器

```powershell
mkdocs serve
```

启动成功后，终端会显示类似：

```
INFO    -  Building documentation...
INFO    -  Serving on http://127.0.0.1:8000
```

### 8.3 在浏览器中查看

打开浏览器，访问 [http://127.0.0.1:8000](http://127.0.0.1:8000)，即可看到网站的实时预览。

修改 Markdown 文件并保存后，页面会自动刷新，无需重启服务器。

### 8.4 停止预览

在终端中按 `Ctrl + C` 即可停止预览服务器。

---

## 9. 用 VS Code 编辑网站内容

### 9.1 安装 VS Code

1. 访问 [https://code.visualstudio.com](https://code.visualstudio.com)
2. 下载并安装
3. 安装完成后打开 VS Code

### 9.2 打开仓库文件夹

1. 在 VS Code 中点击 **File → Open Folder**
2. 选择你刚才 clone 的 `home` 文件夹
3. 左侧文件树会显示所有文件

### 9.3 编辑通知内容

以 `docs/Notification/Career/Career.md` 为例：

1. 在左侧文件树中找到该文件，点击打开
2. 文件内容格式如下：

```markdown
---
cards:
  - ddl: 2026-04-24
    title: 港澳台大学生暑期实习活动
    detail: 活动描述内容...
    href: https://链接地址
    tags:
      - text: 实习
        class: tag-target
---
```

3. 要**新增一条通知**，在 `cards:` 下方复制一个条目模板：

```markdown
  - ddl: 2026-12-31
    title: 新通知标题
    detail: 通知的详细内容描述
    href: https://相关链接
    tags:
      - text: 标签名
        class: tag-target
```

4. 修改 `ddl`（截止日期）、`title`（标题）、`detail`（详情）、`href`（链接）、`tags`（标签）

5. 按 `Ctrl + S` 保存文件

> **重要：** 日期格式必须是 `YYYY-MM-DD`，例如 `2026-12-31`。

---

## 10. Markdown 语法速查

Markdown 是一种轻量级文本格式，用简单符号实现排版。

| 效果 | 写法 |
|------|------|
| 一级标题 | `# 标题` |
| 二级标题 | `## 标题` |
| 三级标题 | `### 标题` |
| **加粗** | `**文字**` |
| *斜体* | `*文字*` |
| 链接 | `[显示文字](https://网址)` |
| 图片 | `![描述](图片地址)` |
| 无序列表 | `- 项目` |
| 有序列表 | `1. 项目` |
| 引用 | `> 引用内容` |
| 代码 | `` `代码` `` |
| 分隔线 | `---` |

### 示例

```markdown
# 这是大标题

## 这是中标题

这是一段普通文字，**加粗文字**和*斜体文字*。

- 第一项
- 第二项
- 第三项

[点击访问浙江大学](https://www.zju.edu.cn)

> 这是一段引用
```

---

## 11. 提交并推送修改

编辑完成后，需要把修改提交到 Git 并推送到 GitHub。

### 11.1 查看修改状态

```powershell
git status
```

会显示哪些文件被修改了（红色表示已修改未暂存）。

### 11.2 暂存修改

```powershell
git add .
```

`.` 表示暂存所有修改的文件。

### 11.3 提交修改

```powershell
git commit -m "更新Career通知：添加暑期实习活动"
```

`-m` 后面引号内写本次修改的简要说明，方便别人了解你改了什么。

### 11.4 推送到 GitHub

```powershell
git push origin main
```

首次推送时可能会弹出浏览器要求你登录 GitHub 授权，按提示操作即可。

---

## 12. 发起 Pull Request

推送完成后，你的修改只在你自己的 Fork 仓库里，需要发起 Pull Request 请求合并到原仓库。

1. 打开浏览器，访问你的 Fork 仓库：`https://github.com/你的用户名/home`
2. 你会看到页面顶部提示 "This branch is X commits ahead of ZJU-CSSU-Dev:main"
3. 点击旁边的 **Contribute** → **Open pull request**
4. 填写标题和描述，说明你修改了什么
5. 点击 **Create pull request**

等待仓库管理员审核通过后，你的修改就会合并到原仓库，网站内容也会更新。

---

## 13. 后续更新：同步最新版本

当原仓库有新的修改时，你需要把最新版本同步到你的本地。

### 13.1 添加原仓库为上游远程源（只需做一次）

```powershell
git remote add upstream https://github.com/ZJU-CSSU-Dev/home.git
```

### 13.2 每次同步时执行

```powershell
git fetch upstream
git merge upstream/main
```

或者一行命令：

```powershell
git pull upstream main
```

如果提示冲突（CONFLICT），需要手动解决冲突后再提交。


# yarn-demo

yarn 尝鲜 [参考](https://yarnpkg.com/en/docs/usage)

## install

```shell

# 安装如果你是mac请看下面  别的请参考 https://yarnpkg.com/en/docs/install
brew update
brew install yarn

#add PATH 在.zshrc 或者是 .profile  .bashrc 中添加  .zshrc列如下:
sudo vim .zshrc
export PATH="$PATH:`yarn global bin`"

```

## 操作

```shell
# 新增
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]

# 更新
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]

#remove
yarn remove [package]
```

## test

```shell
yarn install
# 启动测试列子
npm start
```


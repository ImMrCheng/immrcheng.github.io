/*
 * @Author: chengbin
 * @Create: 2021-05-08 16:30:25
 * @Description: description
 */

const path = require('path')
const fs = require('fs-extra')
const glob = require('glob')
const zipper = require('zip-local')

class Build {
  async start() {
    await this.init()
    // 打包项目
    await this.zipProject()
    // 打包页面文件
    await this.zipPages()
  }

  async init() {
    // 清空目录
    await fs.emptyDirSync('./dist/file')
  }

  async zipProject() {
    zipper.sync.zip('./src').compress().save('./dist/file/project.zip')
  }

  async zipPages() {
    const dirViews = path.join(__dirname, '../src/views')
    const files = glob.sync(dirViews + '/**/index.vue')
    for (let i = 0; i < files.length; i++) {
      const filepath = path.resolve(files[i])
      const foldpath = filepath.replace('\\index.vue', '').replace(`${dirViews}\\`, '')
      // 先创建目录
      fs.ensureDirSync(`./dist/file/${foldpath}`, err => {
        if (err) {
          console.log('创建文件夹失败', err)
        }
      })
      zipper.sync.zip(`./src/views/${foldpath}`).compress().save(`./dist/file/${foldpath}/page.zip`)
    }
  }
}

const build = new Build()

build.start()

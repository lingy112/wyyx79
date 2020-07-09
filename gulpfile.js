// /*
//     commonJS 规范
//      1. require() 将这个模块引入
//      2. 使用这个模块上的函数
//  */
// const gulp = require('gulp');

// //编写第一个任务

// // 第一个参数:任务的名字 自定义
//     // 第二个参数:回调函数,任务执行的功能

//     gulp.task('hello',function(){
//         console.log('hello world')
//     })
//     /* 
//         gulp.src() 找到源文件路径
//         gulp.dest()找到目的文件路径  ps: 如果设置的这个目的的文件路径不存在,那么会自动创建
//         pipe() 程序运行管道
//     */
//    // 1 整理,html文件
//    gulp.task('copy-html',function(){
//        return gulp.src('index.html')
//        .pipe(gulp.dest('dist/'))
//    })



//    gulp.task('images',function(){
//        return gulp.src('img/*/*')
//        .pipe(gulp.dest('dist/images'))
//    })
// 导入gulp


const gulp = require('gulp')


const del  = require('del')

const cssmin =  require('gulp-cssmin')

const autoprefixer = require('gulp-autoprefixer')

const htmlmin = require('gulp-htmlmin')
//导入gulp-babel
const babel = require('gulp-babel')
//导入gulp-uglify
const uglify =require('gulp-uglify')

//导入gulp-webserver
const webserver = require('gulp-webserver')



const libHandler = ()=>{
   return gulp.src('./src/lib/*.js')
    .pipe(gulp.dest('./dist/lib'))
}


const imgHandler = ()=>{
   return gulp.src('./src/images/**')
    .pipe(gulp.dest('./dist/images'))
}

// const cssHandler = ()=>{
//     return gulp.src('./src/css/*.css')
//     .pipe(gulp.dest('./dist/css'))
// }


const delHandler = ()=>{
    return del(['./dist'])
}


// css压缩规则




const cssHandler = ()=>{
    return gulp.src('./src/css/*.css')
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
}

 //压缩html规则

 const htmlHandler = ()=>{
    return gulp.src('./src/pages/*.html')
    .pipe(htmlmin({
        removeAttributeQuotes:true,//移出引号
        removeComments:true,//移除注释
        collapseWhitespace:true,//把所有空格移除,变成一行代码
        minifyCSS:true,//去除压缩的空格
        minifyJS:true,//去除压缩js
        collapseBooleanAttributes:true//把值为布尔值的属性简写
    }))
    .pipe(gulp.dest('./dist/pages'))
}

//压缩js
const jsHandler = ()=>{
    return gulp.src('./src/js/*.js')
    .pipe(babel({
        presets:['@babel/env']
    }))
    .pipe(uglify())//es6转换es5
    .pipe(gulp.dest('./dist/js'))
}

//书写 webserver规则
const webserverHander = ()=>{
    return gulp.src('./dist')
    .pipe(webserver({
        port:3000, //端口号
        open:'./pages/index.html', //默认打开的首页,路径从dist开始
        livereload:true,   //热更新
    }))
}
const watchHandler = ()=>{
    gulp.watch('./src/css/*.css',cssHandler)
    gulp.watch('./src/js/*.js',jsHandler)
    gulp.watch('./src/pages/*.html',htmlHandler)
    gulp.watch('./src/images/**',imgHandler)
    gulp.watch('./src/lib/*.js',libHandler)
}
 
//导出任务

// module.exports.default = libHandler
// module.exports.images = imgHandler
// // module.exports.css = cssHandler
// module.exports.del = delHandler
// module.exports.css = cssHandler
// module.exports.html = htmlHandler
// module.exports.js = jsHandler

module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(libHandler,imgHandler,cssHandler,htmlHandler,jsHandler),
    webserverHander,
    watchHandler
)
// module.exports.server =  webserverHander
// module.exports.watch =  watchHander     
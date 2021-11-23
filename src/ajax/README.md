## 通用 ajax 请求方式

#### 使用方法

```js
// vuex中使用
// 引入
import { fetchGet, fetchPost } from '@/ajax/index.js';
// 使用
fetchGet(options, successFn, errorFn);
fetchPost(options, successFn, errorFn);
```

```js
// 入口文件
import Vue from 'vue';
import ajax from '@/ajax/index.js';
Vue.use(ajax);
// 组件内使用
this.$get(options, successFn, errorFn);
this.$post(options, successFn, errorFn);
```

以上 2 种使用方法均支持 await，即

```js
// store
await fetchGet(options, successFn, errorFn);
await fetchPost(options, successFn, errorFn);
// components
await this.$get(options, successFn, errorFn);
await this.$post(options, successFn, errorFn);
```

#### 参数解读

1. errorFn

```js
// 参数类型：function
// 是否必填：false
// 参数描述：错误场景回调方法 catch 或者 statusCode !== '0'
```

2. successFn

```js
// 参数类型：function
// 是否必填：false
// 参数描述：正确接口返回数据回调方法，只会返回 statusCode === '0' 的接口数据
```

3. options

```js
// 参数类型：Object
// 是否必填：true
/**
 * 字段说明
 * @param {String} api [必填] 接口请求地址，会和 baseUrl 拼接
 * @param {Object} params [选填] 接口请求参数
 * @param {Number} type [选填] [预留] 默认 0, 区分 params 处理方式
 */
```

#### 使用示例

1. this.\$get

```js
this.$get(
  {
    api: 'cms/api/loginStatusCheck/queryStatusCode'
  },
  response => {
    const { data = {} } = response;
    // do something
  }
);
```

2. this.\$post

```js
this.$post(
  {
    api: 'portal/api/msgFeatures/queryMessageType',
    params: { bigCode: 'MSG_CLASS' }
  },
  response => {
    const { data = [] } = response;
    // do something
  }
);
```

const SAT_HOST = 'http://localhost:8080';
const API = '/api';

/*
tabbar接口
参数：token：可选，用户标识
*/

const GET_TABBAR_LIST = `${API}/tabbar`;

/*
正在热映的接口
参数：token：可选，用户标识
*/
const GET_PLAYING_LIST = `${API}/film`;

/*
当前电影详情
参数：
  token：可选，用户标识
  filmId: 必选，电影id
*/
const POST_CURRENT_FILM_DETAIL = `${API}/film/filmDetail`;

/*
影院列表
参数：
  token：可选，用户标识
  filmId: 必选，电影id
*/

const GET_CINEMA_LIST = `${API}/cinema`;

export default{
  SAT_HOST,
  GET_TABBAR_LIST,
  GET_PLAYING_LIST,
  POST_CURRENT_FILM_DETAIL,
  GET_CINEMA_LIST
};

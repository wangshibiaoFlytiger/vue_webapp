import { SET_FILM } from "@/store/mutation-types";

export default {
  /**
   * 查询某film
   */
  getFilm({ commit }, { filmId }) {
    //todo: 使用ajax调用详情接口, 获取详情数据
    let film = JSON.parse(
      '{"id":"5df365876a368f05a59be75c","detailPageUrl":"https://www.88ys.com/xijupian/201909/65896.html","title":"悠然见南山","actor":"胡夏,童菲,九孔,孙越,朱云峰,贾玲,张小斐,梁超,潘斌龙,崔志佳","coverUrl":"https://cdn.aqdstatic.com:966/88ys/upload/vod/2019-09/156845222031789853.jpg","category":"喜剧片","director":"顾伟","publishYear":2019,"location":"未知","language":"未知","tag":"","desc":"报社记者沈悠然（童菲 饰）在一家黑心医院做卧底，遇见给母亲治病的南山（胡夏 饰）。南山病急乱投医，中了医院的圈套。身为记者的沈悠然要把医院的黑幕曝光出来，就把医院卖给南山母亲的假药带走了。南山不明真相，救母心切，疯狂追逐沈悠然，而沈悠然的那些证据居然被一个疯子给抢走了。与此同时，医院派来的保镖开始疯狂追杀沈悠然，沈悠然为了自己的良知，拼命保护那些证据。当南山明白了事情真相后，他毅然和沈悠然站在一起。二人齐心协力曝光了那家黑心医院，两个善良的人最终收获爱的感动。                        《悠然见南山》电影于2019年12月13号由88影视网收集自网络发布，同时提供在线观看服务。","playUrlInfo":{"ZDm3u8播放源":[{"title":"HD1280高清国语中字版","playPageUrl":"https://vip1.dflfcm.com:966/p2p/?url=https://hong.tianzhen-zuida.com/20191213/16026_01244ef5/index.m3u8","videoUrl":"https://hong.tianzhen-zuida.com/20191213/16026_01244ef5/index.m3u8"}],"wlm3u8播放源":[{"title":"HD预告","playPageUrl":"https://vip1.dflfcm.com:966/p2p/?url=https://cn5.download05.com/hls/20190904/0ef3688c0204100864007b1e3e7663ec/1567568567/index.m3u8","videoUrl":"https://cn5.download05.com/hls/20190904/0ef3688c0204100864007b1e3e7663ec/1567568567/index.m3u8"}]},"type":1,"createTime":"2019-12-13 18:18:47","updateTime":"2019-12-13 18:18:47","deleteTime":null}'
    );

    // 调用mutation方法, 存储film状态
    commit(SET_FILM, film);

    console.log(filmId, film);
    return film;
  }
};

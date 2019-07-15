import { createPageProps, compose, usePageProps } from '@/core/next-compose';
import { Distrct, DistrctResponse } from '@/api/amap/interfaces/distrct';
import { local } from '@/helpers/fetch';
import { amap } from '@/api/amap';

const pageProps = [
  createPageProps(ctx => ({ adcode: ctx.query.adcode })),
  createPageProps(async ctx => ({
    detail: await local.get(`/api/pois/${ctx.query.adcode}`),
  })),
  createPageProps(async ctx => ({
    districts: (await amap.get<DistrctResponse>('/config/district', {
      keywords: ctx.query.adcode,
      subdistrict: 1,
      extensions: 'base',
    })).districts[0].districts,
  })),
];

// districts

interface PageProps {
  districts: Distrct[];
  detail: any[];
}

export default compose(pageProps)(() => {
  const { districts, detail } = usePageProps<PageProps>();

  return (
    <div>
      <table id="sheetjs" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>名称</th>
            <th>一级分类</th>
            <th>二级分类</th>
            <th>省</th>
            <th>市</th>
            <th>区</th>
            <th>详细地址</th>
            <th>经纬度</th>
            <th>人均消费</th>
            <th>评分</th>
          </tr>
        </thead>
        <tbody>
          {detail.slice(0, 25).map((poi: any) => (
            <tr key={poi.id}>
              <td>{poi.name}</td>
              <td>{poi.type && poi.type.split(';')[0]}</td>
              <td>{poi.type && poi.type.split(';')[1]}</td>
              <td>{poi.pname}</td>
              <td>{poi.cityname}</td>
              <td>{poi.adname}</td>
              <td>{poi.address}</td>
              <td>{poi.location}</td>
              <td>{poi.biz_ext && poi.biz_ext.cost}</td>
              <td>{poi.biz_ext && poi.biz_ext.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

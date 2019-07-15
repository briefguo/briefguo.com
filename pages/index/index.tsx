import {
  InputGroup,
  Tag,
  H4,
  AnchorButton,
  ButtonGroup,
  Spinner,
} from '@blueprintjs/core';
import React from 'react';
import { Page } from '@/core/page';
import { usePageProps, compose } from '@/core/next-compose';
import { local } from '@/helpers/fetch';
import { DistrctResponse } from './interfaces/distrct';
import { amap } from '@/api/amap';
import { map, debounce, filter } from 'rxjs/operators';
import { useEventCallback } from 'rxjs-hooks';
import { timer } from 'rxjs';
import { useAsync } from 'react-use';
import styled from 'styled-components';
import { Flex } from '@/core/layout/flex';

export const getConfigDistrict = async ({ keywords }: any) =>
  await amap.get<DistrctResponse>('/config/district', {
    keywords,
    subdistrict: 1,
    extensions: 'base',
  });

const DistrctList = styled.div`
  /* width: 500px; */
  /* margin: 0 auto; */
`;

const DistrctItem = styled.div`
  margin: 8px 0;
  border-bottom: 1px solid #ddd;
`;

const pageProps = [
  async () => ({
    catalogs: await local.get('/api/amap/catalogs'),
  }),
];

export default compose(pageProps)(() => {
  const [handleInputChange, keywords] = useEventCallback(
    event$ =>
      event$.pipe(
        map((e: any) => e.target.value),
        debounce(val => timer(800)),
        filter(val => val.length >= 2),
      ),
    '',
  );
  const { value, loading } = useAsync(() => getConfigDistrict({ keywords }), [
    keywords,
  ]);
  return (
    <Page>
      <Page.Container>
        <Page.Content>
          <InputGroup
            onChange={handleInputChange}
            type="text"
            large
            placeholder="输入城市"
          />
          <Page.EmberedError
            visible={value && value.districts.length === 0}
            description="什么都没有"
            code={404}
            icon="geosearch"
          />
          <Page.Content>
            {loading && <Spinner />}
            {value && (
              <DistrctList>
                {value.districts.map(d => (
                  <DistrctItem key={d.adcode}>
                    <Flex justify="space-between" align="center">
                      <span>
                        <span style={{ marginRight: 8 }}>
                          {d.name}({d.citycode})
                        </span>
                        <Tag>{d.level}</Tag>
                      </span>
                      {d.level === 'city' && (
                        <AnchorButton
                          intent="primary"
                          href={`/task/${d.citycode}`}
                        >
                          获取所有商户
                        </AnchorButton>
                      )}
                    </Flex>
                  </DistrctItem>
                ))}
              </DistrctList>
            )}
          </Page.Content>
        </Page.Content>
      </Page.Container>
    </Page>
  );
});

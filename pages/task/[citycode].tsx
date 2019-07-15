import { Page } from '@/core/page';
import { useAsync } from 'react-use';
import { local } from '@/helpers/fetch';
import { useRouter } from 'next/router';
import { AnchorButton, ProgressBar } from '@blueprintjs/core';

export default (props: any) => {
  const router = useRouter();
  const citycode = router.query.citycode;
  const { value, loading } = useAsync(() => local.get(`/api/task/${citycode}`));
  return (
    <Page>
      <Page.EmberedError
        visible={loading}
        code={201}
        description="正在处理，单个城市初次缓存将会花1～2分钟，请稍等..."
        action={<ProgressBar intent="primary" />}
      />
      <Page.EmberedError
        visible={!loading}
        code={201}
        description="已完成数据的缓存，可以直接下载Excel"
        action={
          <AnchorButton
            intent="primary"
            minimal
            active
            large
            href={`/api/pois/${citycode}/export`}
          >
            下载
          </AnchorButton>
        }
      />
    </Page>
  );
};

import React, { Component } from 'react';
import {
  styled,
  SCard,
  SCardMeta,
  SCardMetaDetail,
  SContainer,
  DownloadButton,
  PageContent,
  PageSection,
  TitleSection,
  RowFlex,
} from '../../../styledComponents';

interface IProps {
  className?: string;
}

const CardWrap = styled(SContainer as any)`
  ${RowFlex};
  justify-content: center;
  max-width: 770px;
`;

const ButtonWrap = styled.div`
  margin-top: 5rem;
  text-align: center;
`;

const MoreButton = styled(DownloadButton as any)`
  &.ant-btn {
    max-width: 200px;
  }
`;

class FeaturesPage extends Component<IProps> {
  render() {
    const { className } = this.props;
    return (
      <PageContent className={className}>
        <TitleSection>
          <h3 data-title>Preview Features</h3>
          <p>
            Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit
            elit,
            <br />
            elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies
            sapien.
          </p>
        </TitleSection>
        <PageSection>
          <CardWrap>
            <SCard cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
              <SCardMeta title="1 Title" description="Donec facilisis tortor ut" />
              <SCardMetaDetail description="Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. " />
            </SCard>
            <SCard cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
              <SCardMeta title="2 제목" description="설명" />
              <SCardMetaDetail description="얼음 크고 이것은 것이다. 소금이라 사람은 바로 가는 날카로우나 아니다. 어디 우리는 길지 창공에 풀이 주며, 인생을 이것이다. 이상이 천하를 같이, 속잎나고, 힘있다. 얼음에 못하다 따뜻한 천고에 날카로우나 가는 능히 얼마나 보라." />
            </SCard>
            <SCard cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
              <SCardMeta
                title="3 Title Title Title Title Title Title Title Title Title"
                description="Donec facilisis tortor ut Donec facilisis tortor ut Donec facilisis tortor ut"
              />
              <SCardMetaDetail description="Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at," />
            </SCard>
            <SCard cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
              <SCardMeta
                title="4 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목"
                description="설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명"
              />
              <SCardMetaDetail description="얼음 크고 이것은 것이다. 소금이라 사람은 바로 가는 날카로우나 아니다. 어디 우리는 길지 창공에 풀이 주며, 인생을 이것이다. 이상이 천하를 같이, 속잎나고, 힘있다. 얼음에 못하다 따뜻한 천고에 날카로우나 가는 능히 얼마나 보라.얼음 크고 이것은 것이다. 소금이라 사람은 바로 가는 날카로우나 아니다. 어디 우리는 길지 창공에 풀이 주며, 인생을 이것이다. 이상이 천하를 같이, 속잎나고, 힘있다." />
            </SCard>
            <SCard cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
              <SCardMeta title="5 Title" description="Donec facilisis tortor ut" />
              <SCardMetaDetail description="Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. " />
            </SCard>
            <SCard cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
              <SCardMeta title="6 제목" description="설명" />
              <SCardMetaDetail description="얼음 크고 이것은 것이다. 소금이라 사람은 바로 가는 날카로우나 아니다. 어디 우리는 길지 창공에 풀이 주며, 인생을 이것이다. 이상이 천하를 같이, 속잎나고, 힘있다. 얼음에 못하다 따뜻한 천고에 날카로우나 가는 능히 얼마나 보라." />
            </SCard>
          </CardWrap>
          <ButtonWrap>
            <MoreButton icon="plus">See more</MoreButton>
          </ButtonWrap>
        </PageSection>
      </PageContent>
    );
  }
}

export default FeaturesPage;

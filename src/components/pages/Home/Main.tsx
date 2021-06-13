import { VFC } from 'react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { colors } from '../../../styles/utils';
import { sppx } from '../../../styles/sizes';

const types = [
  {
    id: 1,
    label: 'からだ',
    value: 'body',
    length: 8,
  },
  {
    id: 2,
    label: 'いろ',
    value: 'color',
    length: 8,
  },
  {
    id: 3,
    label: 'め',
    value: 'eye',
    length: 8,
  },
  {
    id: 4,
    label: 'くち',
    value: 'mouse',
    length: 6,
  },
  {
    id: 5,
    label: 'みみ',
    value: 'ear',
    length: 6,
  },
  {
    id: 6,
    label: 'ひげ',
    value: 'beard',
    length: 5,
  },
];

const Main: VFC = () => {
  // const [mainImage, setMainImage] = useState(1);
  const [shapeId, setShapeId] = useState(Array(types.length).fill(1));
  const [activeTypesId, setActiveTypesId] = useState(1);

  const setShapesState = (typesIndex: number, selectIndex: number) => {
    setShapeId((currentStates) => {
      const newShapesState = currentStates.map((currentState, stateIndex) =>
        typesIndex - 1 === stateIndex ? selectIndex : currentState,
      );
      return newShapesState;
    });
  };
  console.log(shapeId[0]);
  return (
    <>
      <Root>
        <MainImageWrapper>
          <MainImage>
            <BodyImage
              src={`/assets/images/cats/body/thumbnails/${shapeId[0]}@2x.png`}
              alt=""
            />
            <EyeImage
              src={`/assets/images/cats/eye/main/${shapeId[2]}@2x.png`}
              alt=""
            />
          </MainImage>
        </MainImageWrapper>
        <SelectShapesWrapper>
          {types.map((type) => {
            return (
              activeTypesId === type.id && (
                <SelectShapes key={type.id}>
                  {[...Array(type.length)].map((_, index) => {
                    return (
                      <SelectShape
                        key={index}
                        shapeId={shapeId[activeTypesId - 1]}
                        selectedId={index + 1}
                      >
                        <Thumbnail
                          src={`/assets/images/cats/${type.value}/thumbnails/${
                            index + 1
                          }@2x.png`}
                          alt=""
                          onClick={() =>
                            setShapesState(activeTypesId, index + 1)
                          }
                        />
                      </SelectShape>
                    );
                  })}
                </SelectShapes>
              )
            );
          })}
        </SelectShapesWrapper>
        <SelectTypesWrapper>
          <SelectTypes>
            {types.map((type) => {
              return (
                <SelectType
                  key={type.id}
                  typeId={activeTypesId}
                  selectedId={type.id}
                >
                  <SelectTypeThumbnail
                    src={`/assets/images/cats/types/${type.id}@2x.png`}
                    alt=""
                    onClick={() => setActiveTypesId(type.id)}
                  />
                  <SelectTypeLabel>{type.label}</SelectTypeLabel>
                </SelectType>
              );
            })}
          </SelectTypes>
        </SelectTypesWrapper>
      </Root>
    </>
  );
};
export default Main;

const Root = styled.div`
  width: 100%;
  background: ${colors.white};
`;
const MainImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainImage = styled.div`
  width: 80%;
  position: relative;
  height: ${sppx(300)};
`;
const BodyImage = styled.img`
  position: absolute;
  display: block;
  object-fit: contain;
`;
const EyeImage = styled.img`
  position: absolute;
  display: block;
  transform: scale(0.45) translate(${sppx(-15)}, ${sppx(45)});
`;
const SelectShapesWrapper = styled.div`
  background: ${colors.powderBlue};
`;
const SelectShapes = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: center;
  padding: ${sppx(10)};
`;
type SelectShapeProps = {
  shapeId: number;
  selectedId: number;
};
const SelectShape = styled.li<SelectShapeProps>`
  width: calc(25% - ${sppx(10)});
  background: ${colors.white};
  border-radius: 16px;
  margin: ${sppx(5)};
  border: ${sppx(3)} solid;
  border-color: ${({ shapeId, selectedId }) =>
    shapeId === selectedId ? colors.aquaBlue : colors.white};
`;
const Thumbnail = styled.img`
  cursor: pointer;
  padding: ${sppx(5)};
`;

const SelectTypesWrapper = styled.div`
  background: ${colors.milkyPink};
  overflow-x: auto;
`;
const SelectTypes = styled.ul`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: ${sppx(10)};
  width: fit-content;
`;
type SelectTypeProps = {
  typeId: number;
  selectedId: number;
};
const SelectType = styled.li<SelectTypeProps>`
  cursor: pointer;
  width: ${sppx(50)};
  height: ${sppx(50)};
  background: ${colors.white};
  border-radius: 100px;
  margin: ${sppx(5)};
  border: 2px solid;
  border-color: ${({ typeId, selectedId }) =>
    typeId === selectedId ? colors.shellPink : colors.white};
  margin-bottom: ${sppx(20)};
`;
const SelectTypeThumbnail = styled.img``;

const SelectTypeLabel = styled.p`
  text-align: center;
  font-size: 12px;
  margin-top: ${sppx(5)};
`;

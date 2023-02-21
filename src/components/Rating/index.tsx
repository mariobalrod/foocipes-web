import { useLogic } from './logic';
import {
  Container,
  StarBackground,
  StarForeground,
  StarForegroundProgress,
  StarWrapper,
} from './styles';
import { Props } from './types';

export function Rating({
  rating,
  ratingMax = 5,
  iconSizeRem = 1.25,
  className,
}: Props) {
  const { base, percent } = useLogic({ rating, ratingMax });

  return (
    <Container className={className}>
      {Array(ratingMax)
        .fill(null)
        .map((_, index) => (
          <StarWrapper $iconSizeRem={iconSizeRem} key={index}>
            <StarBackground />
            {base >= index ? (
              <StarForegroundProgress
                $widthPercent={base > index ? 100 : percent}
              >
                <StarForeground $iconSizeRem={iconSizeRem} />
              </StarForegroundProgress>
            ) : null}
          </StarWrapper>
        ))}
    </Container>
  );
}

import { VariantProps } from '../Preview';
import DefaultLink from './DefaultLink';
import DefaultStyle from './DefaultStyle';
import SubtleStyle from './SubtleStyle';
import CtaStyle from './CtaStyle';
import NavStyle from './NavStyle';
import MailtoStyle from './MailtoStyle';

const LinkController = ({ variantId }: VariantProps): JSX.Element => {
  switch (variantId) {
    // Styles
    case 'linkDefault':
      return <DefaultStyle />;
    case 'linkSubtle':
      return <SubtleStyle />;
    case 'linkCta':
      return <CtaStyle />;
    case 'linkMailto':
      return <MailtoStyle />;
    case 'linkNavigation':
      return <NavStyle />;

    default:
      return <DefaultLink />;
  }
};

export default LinkController;

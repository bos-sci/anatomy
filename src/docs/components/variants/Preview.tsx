import { Suspense, lazy, useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import NotFound from '../../shared/components/notFound/NotFound';
import useTitle from '../../shared/hooks/useTitle';
import { ComponentModifier, GetComponentQuery } from '../../shared/types/contentful';
import { ComponentContext } from '../ComponentsController';
import Fallback from './Fallback';
import DefaultNavWizard from './navWizard/DefaultNavWizard';

export interface VariantProps {
  variantId: string;
}

interface Props {
  variant?: string;
  variantId?: string;
  shouldLinkToExamples?: boolean;
  isExternal?: boolean;
}

const Preview = ( props: Props ): JSX.Element => {
  const params = useParams();
  const data = useContext(ComponentContext);

  const [componentData, setComponentData] = useState<GetComponentQuery['component']>({} as GetComponentQuery['component']);
  const [renderedComponent, setRenderedComponent] = useState<JSX.Element | null>(null);
  const [variant, setVariant] = useState<ComponentModifier | null | undefined>(undefined);

  useEffect(() => {
    if(data) {
      setComponentData(data);
    }
  }, [data]);

  useEffect(() => {
    let currentVariant: ComponentModifier | null = null;

    currentVariant = componentData?.modifiersCollection?.items.find(variant => variant?.modifierId === params.example) as ComponentModifier;

    if (!currentVariant) {
      currentVariant = componentData?.stylesCollection?.items.find(variant => variant?.styleId === params.example) as ComponentModifier;
    }

    if (!currentVariant) {
      currentVariant = componentData?.statesCollection?.items.find(variant => variant?.stateId === params.example) as ComponentModifier;
    }

    setVariant(currentVariant === undefined ? null : currentVariant);
  }, [componentData, params.example]);

  let title = '';
  if (componentData?.name) {
    title = componentData.name;

    if (props.isExternal && params.example) {
      title = (variant?.name ? variant.name : 'Default') + ' - ' + title;
    }
  }

  useTitle({
    titlePrefix: `${title} - Components`
  });

  useEffect(() => {
    const variantId = props.variantId ? props.variantId : params.example!;

    if (props.shouldLinkToExamples) {
      setRenderedComponent(
        <Link
          className="docs-demo-link"
          to={`example/${props.variantId ? props.variantId : 'default'}`}
          target="_blank">
          See {props.variant || 'example'}
        </Link>
      );
    } else {
      switch (params.componentName) {
        case 'accordion':
          const DefaultAccordion = lazy(() => import('./accordion/DefaultAccordion'));
          setRenderedComponent(<DefaultAccordion />);
          break;

        case 'breadcrumbs':
          const BreadcrumbController = lazy(() => import('./breadcrumbs/_BreadcrumbController'));
          setRenderedComponent(<BreadcrumbController variantId={variantId} />);
          break;

        case 'button':
          const ButtonController = lazy(() => import('./buttons/_ButtonController'));
          setRenderedComponent(<ButtonController variantId={variantId} />);
          break;

        case 'checkbox':
          const InputCheckboxController = lazy(() => import('./inputCheckbox/_inputCheckboxController'));
          setRenderedComponent(<InputCheckboxController variantId={variantId} />);
          break;

        case 'checkbox-group':
          const InputCheckboxGroupController = lazy(() => import('./inputCheckboxGroup/_InputCheckboxGroupController'));
          setRenderedComponent(<InputCheckboxGroupController variantId={variantId} />);
          break;

        case 'form':
          const DefaultForm = lazy(() => import('./forms/DefaultForm'));
          setRenderedComponent(<DefaultForm />);
          break;

        case 'link':
          const LinkController = lazy(() => import('./link/_LinkController'));
          setRenderedComponent(<LinkController variantId={variantId} />);
          break;

        case 'navigation-link':
          const DefaultNavLink = lazy(() => import('./navLink/DefaultNavLink'));
          setRenderedComponent(<DefaultNavLink />);
          break;

        case 'primary-navigation':
          const NavPrimaryController = lazy(() => import('./navPrimary/_NavPrimaryController'));
          setRenderedComponent(<NavPrimaryController variantId={variantId} />);
          break;

        case 'radio-group':
          const InputRadioGroupController = lazy(() => import('./inputRadioGroup/_InputRadioGroupController'));
          setRenderedComponent(<InputRadioGroupController variantId={variantId} />);
          break;

        case 'secondary-navigation':
          const DefaultNavSecondary = lazy(() => import('./navSecondary/DefaultNavSecondary'));
          setRenderedComponent(<DefaultNavSecondary />);
          break;

        case 'skip-link':
          setRenderedComponent(<Link className="docs-demo-link" to="/components/skip-link/example" target="_blank">See example</Link>);
          break;

        case 'stoplight':
          const StoplightController = lazy(() => import('./stoplight/_StoplightController'));
          setRenderedComponent(<StoplightController variantId={variantId} />);
          break;

        case 'tabs':
          const DefaultTabs = lazy(() => import('./tabs/DefaultTabs'));
          setRenderedComponent(<DefaultTabs />);
          break;

        case 'tag':
          const TagController = lazy(() => import('./tag/_TagController'));
          setRenderedComponent(<TagController variantId={variantId} />);
          break;

        case 'tertiary-navigation':
          const DefaultNavTertiary = lazy(() => import('./navTertiary/DefaultNavTertiary'));
          setRenderedComponent(<DefaultNavTertiary />);
          break;

        case 'text-input':
          const InputTextController = lazy(() => import('./inputText/_InputTextController'));
          setRenderedComponent(<InputTextController variantId={variantId} />);
          break;

        case 'wizard-navigation':
          setRenderedComponent(<DefaultNavWizard />);
          break;

        default:
          setRenderedComponent(<p>Failed to load component!</p>);
      }
    }
  }, [props, params]);

  if ((variant === null && params.example !== 'default') && componentData?.name && props.isExternal && renderedComponent) {
    return <NotFound />;
  } else {
    return (
      <Suspense fallback={<Fallback />}>
        {renderedComponent}
      </Suspense>
    );
  }
}

export default Preview;
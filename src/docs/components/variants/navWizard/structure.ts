import { NavItemWizard } from '../../../../library/components/navigation/navWizard/NavWizard';

const basePath = '';

const exampleData: NavItemWizard[] = [
  {
    text: 'Option',
    description: 'Optional description for this step',
    title: 'Second step',
    children: [
      {
        text: 'Option',
        title: 'Third step',
        overflowLinkText: 'See all links',
        overflowTo: basePath + '/',
        children: [
          {
            text: 'Link',
            slug: basePath + '/'
          },
          {
            text: 'Link',
            slug: basePath + '/'
          },
          {
            text: 'Link',
            slug: basePath + '/'
          },
          {
            text: 'Link',
            slug: basePath + '/'
          },
          {
            text: 'Link',
            slug: basePath + '/'
          },
          {
            text: 'Link',
            slug: basePath + '/'
          },
          {
            text: 'Link',
            slug: basePath + '/'
          },
          {
            text: 'Link',
            slug: basePath + '/'
          },
          {
            text: 'Link',
            slug: basePath + '/'
          }
        ]
      },
      {
        text: 'Option',
        title: 'Third step',
        children: [
          {
            text: 'Link',
            slug: basePath + '/'
          }
        ]
      },
      {
        text: 'Option',
        title: 'Third step',
        children: [
          {
            text: 'Link',
            slug: basePath + '/'
          }
        ]
      },
      {
        text: 'Option',
        title: 'Third step',
        children: [
          {
            text: 'Link',
            slug: basePath + '/'
          }
        ]
      }
    ]
  },
  // PTC
  {
    text: 'Option',
    description: `Optional description for this step`,
    title: 'Second step',
    children: [
      {
        text: 'Option',
        description: 'Optional description for this step',
        title: 'Third step',
        overflowLinkText: 'See all treatments',
        overflowTo: basePath + '/',
        children: [
          {
            text: 'Option',
            title: 'Fourth step',
            children: [
              {
                text: 'Link',
                slug: basePath + '/'
              },
              {
                text: 'Link',
                slug: basePath + '/'
              },
              {
                text: 'Link',
                slug: basePath + '/'
              }
            ]
          },
          {
            text: 'Option',
            title: 'Fourth step',
            children: [
              {
                text: 'Link',
                slug: basePath + '/'
              }
            ]
          },
          {
            text: 'Option',
            title: 'Fourth step',
            children: [
              {
                text: 'Link',
                slug: basePath + '/'
              }
            ]
          },
          {
            text: 'Option',
            title: 'Fourth step',
            children: [
              {
                text: 'Linkl',
                slug: basePath + '/'
              }
            ]
          },
          {
            text: 'Option',
            title: 'Fourth step',
            children: [
              {
                text: 'Link',
                slug: basePath + '/'
              }
            ]
          },
          {
            text: `Option`,
            title: 'Fourth step',
            children: [
              {
                text: 'Link',
                slug: basePath + '/'
              }
            ]
          },
          {
            text: `Option`,
            title: 'Fourth step',
            children: [
              {
                text: 'Link',
                slug: basePath + '/'
              }
            ]
          },
          {
            text: 'Option',
            title: 'Fourth step',
            children: [
              {
                text: 'Link',
                slug: basePath + '/'
              }
            ]
          },
          {
            text: 'Option',
            title: 'Fourth step',
            children: [
              {
                text: 'Link',
                slug: basePath + '/'
              }
            ]
          }
        ]
      },
      {
        text: 'Option',
        description: 'Device setup, user manuals, and troubleshooting',
        title: 'Third step',
        children: [
          {
            text: 'Link',
            slug: basePath + '/'
          }
        ]
      },
      {
        text: 'Option',
        description: 'Optional description for this step',
        title: 'Third step',
        children: [
          {
            text: 'Link',
            slug: basePath + '/'
          }
        ]
      }
    ]
  },
  // About BSC
  {
    text: 'Option',
    description: 'Optional description for this step',
    title: 'Second step',
    children: [
      {
        text: 'Option',
        description: 'Optional description for this step',
        title: 'Third step',
        overflowLinkText: 'See all',
        overflowTo: basePath + '/',
        children: [
          {
            text: 'Link',
            slug: basePath + '/'
          },
          {
            text: 'Link',
            slug: basePath + '/'
          },
          {
            text: 'Link',
            slug: basePath + '/'
          },
          {
            text: 'Link',
            slug: basePath + '/'
          },
          {
            text: 'Link',
            slug: basePath + '/'
          }
        ]
      },
      {
        text: 'Option',
        description: 'Optional description for this step',
        title: 'Third step',
        children: [
          {
            text: 'Link',
            slug: basePath + '/'
          }
        ]
      },
      {
        text: 'Option',
        description: 'Optional description for this step',
        title: 'Third step',
        children: [
          {
            text: 'Link',
            slug: basePath + '/'
          }
        ]
      },
      {
        text: 'Option',
        description: 'Optional description for this step',
        title: 'Third step',
        children: [
          {
            text: 'Link',
            slug: basePath + '/'
          }
        ]
      },
      {
        text: 'Link',
        href: 'external-url-here'
      }
    ]
  }
]

export default exampleData;
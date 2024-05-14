import { useRef } from 'react';
import { Button } from '@boston-scientific/anatomy-react';
import { Modal, ModalRef } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const DefaultModal = (): JSX.Element => {
  const modalRef = useRef<ModalRef>(null);

  const positiveAction = <Button>Positive action</Button>;
  const negativeAction = <Button onClick={() => modalRef.current?.close()}>Cancel</Button>;

  return (
    <>
      <Example>
        <Button type="button" aria-haspopup="true" onClick={() => modalRef.current?.showModal()}>
          Open modal
        </Button>
        <Modal ref={modalRef} title="Modal title" positiveAction={positiveAction} negativeAction={negativeAction}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet varius sapien. Nullam diam nisl,
          congue bibendum orci eu, fermentum consequat nulla. Nunc luctus placerat mauris, eu convallis ante
          sollicitudin in. Maecenas orci eros, placerat bibendum rhoncus a, tincidunt vitae lectus.
        </Modal>
      </Example>
      <iframe
        title="Modal Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-modal--playground&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default DefaultModal;

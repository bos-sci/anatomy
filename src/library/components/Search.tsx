import { ForwardedRef, forwardRef, InputHTMLAttributes, MutableRefObject, useEffect, useRef, useState } from 'react';
import Button from './Button';
import IconClose from './icon/icons/IconClose';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helpText?: string;
  isLabelVisible?: boolean;
  buttonAriaLabel?: string;
  buttonText?: string;
}

let inputId = 0;

const Search = forwardRef(({ label, helpText, isLabelVisible = false, placeholder, buttonAriaLabel, buttonText, onInvalid, onBlur, onChange, ...inputAttrs }: Props, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {

  const [helpTextId, setHelpTextId] = useState('');
  const [value, setValue] = useState('');

  const inputEl = useRef<HTMLInputElement>(null);

  // On component mount
  useEffect(() => {
    const idNum = ++inputId;
    setHelpTextId('inputHelpText' + idNum);
  }, []);

  return (
    <form className="bsds-form-search" role="search" aria-label="site search">
      <div className="bsds-input">
        <label className="bsds-search">
          {isLabelVisible &&
            <div className="bsds-input-text-label">
              { label }
            </div>
          }
          <div className="bsds-search-control">
            <div className="bsds-input-search">
              <input
                ref={node => {
                  if (node) {
                    (inputEl as MutableRefObject<HTMLInputElement>).current = node;
                    if (typeof ref === 'function') {
                      ref(node);
                    } else if (ref) {
                      (ref as MutableRefObject<HTMLInputElement>).current = node;
                    }
                  }
                }}
                type="search"
                className="bsds-input-text-input"
                placeholder={placeholder || 'Search'}
                aria-label="search"
                value={value}
                aria-describedby={helpText || ''}
                onChange={e => setValue(e.target.value)}
                {...inputAttrs} />
              {/* TODO: consider pulling these into an action mixin */}
              {value &&
                <button
                  className="bsds-search-clear"
                  aria-label="clear search text"
                  onClick={() => setValue('')}>
                  <IconClose className="bsds-icon-lg" />
                </button>
              }
            </div>
            <Button variant="assertive" disabled={!value} aria-label={buttonAriaLabel || 'Search'}>
              {buttonText || 'Search'}
            </Button>
          </div>
        </label>
        {helpText && <p id={helpTextId} className="bsds-input-help-text">{ helpText }</p>}
      </div>
    </form>
  );
});

export default Search;
'use client';

import { useEffect } from 'react';

/**
 * Forces HTML5 form validation tooltips into English regardless of the
 * user's browser locale (Chromium uses the UI locale, not the page lang).
 *
 * Mounted once at the layout level — uses capture-phase listeners on
 * `invalid` so it picks up events from every input on the site.
 */
export default function FormMessages() {
  useEffect(() => {
    type FormElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

    const messageFor = (t: FormElement): string => {
      const v = t.validity;
      const type = (t as HTMLInputElement).type;

      if (v.valueMissing) {
        if (t.tagName === 'SELECT') return 'Please select an option';
        if (type === 'checkbox' || type === 'radio') return 'Please check this box if you want to proceed';
        return 'Please fill in this field';
      }
      if (v.typeMismatch) {
        if (type === 'email') return 'Please enter a valid email address';
        if (type === 'url') return 'Please enter a valid URL';
        return 'Please enter a valid value';
      }
      if (v.patternMismatch) return (t as HTMLInputElement).title || 'Please match the requested format';
      if (v.tooShort) {
        const min = (t as HTMLInputElement).minLength;
        return `Please lengthen this text to ${min} characters or more`;
      }
      if (v.tooLong) {
        const max = (t as HTMLInputElement).maxLength;
        return `Please shorten this text to ${max} characters or fewer`;
      }
      if (v.rangeUnderflow) return `Value must be ${(t as HTMLInputElement).min} or more`;
      if (v.rangeOverflow) return `Value must be ${(t as HTMLInputElement).max} or less`;
      if (v.stepMismatch || v.badInput) return 'Please enter a valid value';
      return '';
    };

    const onInvalid = (e: Event) => {
      const t = e.target as FormElement;
      if (!t || !('setCustomValidity' in t)) return;
      t.setCustomValidity(messageFor(t));
    };

    const onInput = (e: Event) => {
      const t = e.target as FormElement;
      if (t && 'setCustomValidity' in t) t.setCustomValidity('');
    };

    // `invalid` doesn't bubble — use capture so a single listener catches them all.
    document.addEventListener('invalid', onInvalid, true);
    document.addEventListener('input', onInput, true);
    document.addEventListener('change', onInput, true);

    return () => {
      document.removeEventListener('invalid', onInvalid, true);
      document.removeEventListener('input', onInput, true);
      document.removeEventListener('change', onInput, true);
    };
  }, []);

  return null;
}

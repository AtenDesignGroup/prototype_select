/**
 * @file
 * Prototype Select behaviors.
 */
import Drupal from 'Drupal';

const DEFAULT_CONFIG = {
  help: Drupal.t(
    'Use tab (or the down arrow key) to navigate through the list of suggestions',
  ),
  placeholder: Drupal.t('Search in the list'),
  noResult: Drupal.t('No result'),
  results: Drupal.t('{x} suggestion(s) available'),
  deleteItem: Drupal.t('Remove {t}'),
  delete: Drupal.t('Remove'),
};

/**
 * Behavior description.
 */
Drupal.behaviors.prototypeSelect = {
  attach: function (context, settings) {
    const selects = Array.from(
      document.querySelectorAll('select[data-select-a11y]'),
    ).filter((element) => {
      return !element.matches('.hidden select[data-select-a11y]');
    });

    const selectA11ys = Array.prototype.map.call(selects, function (select) {
      new Select(select, {
        text: DEFAULT_CONFIG,
      });
    });
  },
};

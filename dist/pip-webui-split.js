/**
 * @file Registration of all application split
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global angular */

(function () {
    'use strict';

    angular.module('pipSplit', [
        'pipLayout.Split'
    ]);

})();

/**
 * @file Split layout
 * @copyright Digital Living Software Corp. 2014-2015
 */

/* global $, angular */

(function () {
    'use strict';

    var thisModule = angular.module('pipLayout.Split', []);

    thisModule.run( ['$rootScope', 'pipSplit', function($rootScope, pipSplit) {
        // Intercept routes
        $rootScope.$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams) {
                // Split animation
                var splitElements = $('.pip-split');
                
                if (splitElements.length > 0) {
                    splitElements.removeClass('pip-transition-forward');
                    splitElements.removeClass('pip-transition-back');
                    if (toState.name != fromState.name) {
                        if (pipSplit.forwardTransition(toState, fromState)) {
                            splitElements.addClass('pip-transition-forward');
                        } else {
                            splitElements.addClass('pip-transition-back');
                        }
                    }
                }

            }
        );

    }]);

    thisModule.provider('pipSplit', function() {
        var transitionSequences = [];

        this.addTransitionSequence = addTransitionSequence;

        this.$get = function () {
            return {
                forwardTransition: forwardTransition
            };
        };

        return;

        //----------------------------

        function addTransitionSequence(sequence) {
            if (!_.isArray(sequence) || sequence.length == 0) {
                throw new Error('Transition sequence must be an array of state names');
            }

            transitionSequences.push(sequence);
        }

        function forwardTransition(toState, fromState) {
            var i, toIndex, fromIndex;

            for (i = 0; i < transitionSequences.length; i++) {
                toIndex = transitionSequences[i].indexOf(toState.name),
                fromIndex = transitionSequences[i].indexOf(fromState.name);

                if (toIndex > -1) {
                    return toIndex > fromIndex;
                }
            }

            return false
        }

    });

})();

//# sourceMappingURL=pip-webui-split.js.map

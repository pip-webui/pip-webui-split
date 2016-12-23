(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.pip || (g.pip = {})).split = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function () {
    'use strict';
    var thisModule = angular.module('pipSplit', []);
    thisModule.run(['$rootScope', 'pipSplit', function ($rootScope, pipSplit) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            var splitElements = $('.pip-split');
            if (splitElements.length > 0) {
                splitElements.removeClass('pip-transition-forward');
                splitElements.removeClass('pip-transition-back');
                if (toState.name != fromState.name) {
                    if (pipSplit.forwardTransition(toState, fromState)) {
                        splitElements.addClass('pip-transition-forward');
                    }
                    else {
                        splitElements.addClass('pip-transition-back');
                    }
                }
            }
        });
    }]);
    thisModule.provider('pipSplit', function () {
        var transitionSequences = [];
        this.addTransitionSequence = addTransitionSequence;
        this.$get = function () {
            return {
                forwardTransition: forwardTransition
            };
        };
        return;
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
            return false;
        }
    });
})();
},{}]},{},[1])(1)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc3BsaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNPQSxDQUFDO0lBQ0csWUFBWSxDQUFDO0lBRWIsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFaEQsVUFBVSxDQUFDLEdBQUcsQ0FBRSxVQUFTLFVBQVUsRUFBRSxRQUFRO1FBRXpDLFVBQVUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQzlCLFVBQVMsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFVBQVU7WUFFcEQsSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRXBDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsYUFBYSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUNwRCxhQUFhLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQ2pELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ2pDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNqRCxhQUFhLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLENBQUM7b0JBQ3JELENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osYUFBYSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO29CQUNsRCxDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDO1FBRUwsQ0FBQyxDQUNKLENBQUM7SUFFTixDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFO1FBQzVCLElBQUksbUJBQW1CLEdBQUcsRUFBRSxDQUFDO1FBRTdCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxxQkFBcUIsQ0FBQztRQUVuRCxJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1IsTUFBTSxDQUFDO2dCQUNILGlCQUFpQixFQUFFLGlCQUFpQjthQUN2QyxDQUFDO1FBQ04sQ0FBQyxDQUFDO1FBRUYsTUFBTSxDQUFDO1FBSVAsK0JBQStCLFFBQVE7WUFDbkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO1lBQzNFLENBQUM7WUFFRCxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUVELDJCQUEyQixPQUFPLEVBQUUsU0FBUztZQUN6QyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO1lBRTFCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM5QyxPQUFPLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7b0JBQ3RELFNBQVMsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUUzRCxFQUFFLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNmLE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO2dCQUMvQixDQUFDO1lBQ0wsQ0FBQztZQUVELE1BQU0sQ0FBQyxLQUFLLENBQUE7UUFDaEIsQ0FBQztJQUVMLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcclxuICogQGZpbGUgU3BsaXQgbGF5b3V0XHJcbiAqIEBjb3B5cmlnaHQgRGlnaXRhbCBMaXZpbmcgU29mdHdhcmUgQ29ycC4gMjAxNC0yMDE1XHJcbiAqL1xyXG5cclxuLyogZ2xvYmFsICQsIGFuZ3VsYXIgKi9cclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgdmFyIHRoaXNNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgncGlwU3BsaXQnLCBbXSk7XHJcblxyXG4gICAgdGhpc01vZHVsZS5ydW4oIGZ1bmN0aW9uKCRyb290U2NvcGUsIHBpcFNwbGl0KSB7XHJcbiAgICAgICAgLy8gSW50ZXJjZXB0IHJvdXRlc1xyXG4gICAgICAgICRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTcGxpdCBhbmltYXRpb25cclxuICAgICAgICAgICAgICAgIHZhciBzcGxpdEVsZW1lbnRzID0gJCgnLnBpcC1zcGxpdCcpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRFbGVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BsaXRFbGVtZW50cy5yZW1vdmVDbGFzcygncGlwLXRyYW5zaXRpb24tZm9yd2FyZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwbGl0RWxlbWVudHMucmVtb3ZlQ2xhc3MoJ3BpcC10cmFuc2l0aW9uLWJhY2snKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodG9TdGF0ZS5uYW1lICE9IGZyb21TdGF0ZS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwaXBTcGxpdC5mb3J3YXJkVHJhbnNpdGlvbih0b1N0YXRlLCBmcm9tU3RhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGxpdEVsZW1lbnRzLmFkZENsYXNzKCdwaXAtdHJhbnNpdGlvbi1mb3J3YXJkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGxpdEVsZW1lbnRzLmFkZENsYXNzKCdwaXAtdHJhbnNpdGlvbi1iYWNrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzTW9kdWxlLnByb3ZpZGVyKCdwaXBTcGxpdCcsIGZ1bmN0aW9uKCk6IGFueSB7XHJcbiAgICAgICAgdmFyIHRyYW5zaXRpb25TZXF1ZW5jZXMgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRUcmFuc2l0aW9uU2VxdWVuY2UgPSBhZGRUcmFuc2l0aW9uU2VxdWVuY2U7XHJcblxyXG4gICAgICAgIHRoaXMuJGdldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGZvcndhcmRUcmFuc2l0aW9uOiBmb3J3YXJkVHJhbnNpdGlvblxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGFkZFRyYW5zaXRpb25TZXF1ZW5jZShzZXF1ZW5jZSkge1xyXG4gICAgICAgICAgICBpZiAoIV8uaXNBcnJheShzZXF1ZW5jZSkgfHwgc2VxdWVuY2UubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVHJhbnNpdGlvbiBzZXF1ZW5jZSBtdXN0IGJlIGFuIGFycmF5IG9mIHN0YXRlIG5hbWVzJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb25TZXF1ZW5jZXMucHVzaChzZXF1ZW5jZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBmb3J3YXJkVHJhbnNpdGlvbih0b1N0YXRlLCBmcm9tU3RhdGUpIHtcclxuICAgICAgICAgICAgdmFyIGksIHRvSW5kZXgsIGZyb21JbmRleDtcclxuXHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0cmFuc2l0aW9uU2VxdWVuY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0b0luZGV4ID0gdHJhbnNpdGlvblNlcXVlbmNlc1tpXS5pbmRleE9mKHRvU3RhdGUubmFtZSksXHJcbiAgICAgICAgICAgICAgICBmcm9tSW5kZXggPSB0cmFuc2l0aW9uU2VxdWVuY2VzW2ldLmluZGV4T2YoZnJvbVN0YXRlLm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0b0luZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9JbmRleCA+IGZyb21JbmRleDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxufSkoKTtcclxuIl19
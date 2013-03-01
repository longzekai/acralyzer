/*
 Copyright 2013 Kevin Gaudin (kevin.gaudin@gmail.com)

 This file is part of Acralyzer.

 Acralyzer is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 Acralyzer is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with Acralyzer.  If not, see <http://www.gnu.org/licenses/>.
 */
(function(acralyzerConfig,acralyzer) {
"use strict";

function AlertCtrl($scope, $notify) {
    $scope.alerts = $notify._alerts;
    $scope.close = function(index) {
        $notify.remove(index);
    };
}

acralyzer.controller('AlertCtrl', ['$scope','$notify', AlertCtrl]);

})(window.acralyzerConfig,window.acralyzer);



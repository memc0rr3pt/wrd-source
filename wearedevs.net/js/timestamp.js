(function(window) {
    function TimeStamp() {
        var library = {}
        library.getAMPM = function(date) {
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            return strTime;
        }
        library.getMonth = function(timestamp) {
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            return months[timestamp.getMonth()];
        }
        library.getWeekDay = function(timestamp) {
            var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            return days[timestamp.getDay()];
        }
        library.Beautify = function(timestamp) {
            var dateToReturn = "";
            timestamp = new Date(timestamp);
            let currentDate = new Date();
            if (currentDate.getFullYear() > timestamp.getFullYear()) {
                dateToReturn += this.getMonth(timestamp) + " " + timestamp.getDate() + ", " + timestamp.getFullYear();
            } else {
                if (currentDate.getMonth() > timestamp.getMonth() || currentDate.getDate() > timestamp.getDate() + 7) {
                    dateToReturn += this.getMonth(timestamp) + " " + timestamp.getDate();
                } else {
                    if (currentDate.getDate() > timestamp.getDate() + 6) {
                        dateToReturn += "Last week " + this.getWeekDay(timestamp);
                    } else {
                        if (currentDate.getDate() > timestamp.getDate() + 1) {
                            dateToReturn += this.getWeekDay(timestamp) + " at " + this.getAMPM(timestamp);
                        } else {
                            if (currentDate.getDate() - 1 === timestamp.getDate()) {
                                dateToReturn += "Yesterday at " + this.getAMPM(timestamp);
                            } else {
                                dateToReturn += this.getAMPM(timestamp);
                            }
                        }
                    }
                }
            }
            return dateToReturn;
        }
        library.Shorten = function(timestamp) {
            var dateToReturn = "";
            timestamp = new Date(timestamp);
            let currentDate = new Date();
            if (currentDate.getFullYear() > timestamp.getFullYear()) {
                dateToReturn += this.getMonth(timestamp).substr(0, 3) + " " + timestamp.getDate() + ", " + timestamp.getFullYear();
            } else {
                if ((currentDate.getMonth() > timestamp.getMonth()) || (currentDate.getDate() > timestamp.getDate() + 6)) {
                    dateToReturn += this.getMonth(timestamp).substr(0, 3) + " " + timestamp.getDate();
                } else {
                    if (currentDate.getDate() > timestamp.getDate()) {
                        dateToReturn += this.getWeekDay(timestamp).substr(0, 3)
                    } else {
                        dateToReturn += this.getAMPM(timestamp);
                    }
                }
            }
            return dateToReturn;
        }
        return library;
    }
    if (typeof(window.TimeStamp) === 'undefined') {
        window.TimeStamp = TimeStamp();
    }
})(window)
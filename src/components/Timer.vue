<template>
    <div class="timer">
        <div class="timer__screen" :class="{ activeTimer: isActive }">
            <span v-if="hours"><pre>{{ hours }}h : </pre></span>
            <span v-if="minutes || hours"><pre>{{ minutes }}m : </pre></span>
            <span>{{ seconds }}s</span>
        </div>
        <div class="timer__buttons" :class="{ activeTimer: isActive }">
            <div v-if="!isActive" class="play-button" @click="startTimer"></div>
            <div v-if="isActive" class="pause-button" @click="pauseTimer"></div>
            <div class="stop-button" @click="stopTimer" ></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'timer',
    data: () => ({
        startTime: new Date(),
        diffTime: 0,
        prevTime: 0,
        interval: [],
        seconds: 0,
        minutes: 0,
        hours: 0,
        isActive: false,
        isPause: false
    }),
    methods: {
        startTimer() {
            this.isPause = false;
            this.isActive = true;
            this.startTime = new Date();
            this.interval.push(setInterval(this.getTime, 1000));
        },
        getTime() {
            if (!this.isPause) {
                let currentTime = new Date();
                this.diffTime = this.prevTime + parseInt(currentTime.getTime() - this.startTime.getTime()) / 1000;
                this.hours = parseInt(this.diffTime / 3600);
                this.minutes = parseInt((this.diffTime / 60)%60);
                this.seconds = parseInt(this.diffTime%60);
            }
        },
        pauseTimer() {
            this.isActive = false;
            this.isPause = true;
            this.prevTime = this.diffTime;
        },
        stopTimer() {
            this.isActive = false;
            this.isPause = false;
            this.diffTime = 0;
            this.prevTime = 0;
            this.seconds = 0;
            this.minutes = 0;
            this.hours = 0;
            this.interval.map(i => clearInterval(i));
        }
    }
}
</script>
import { Component } from '@angular/core';

@Component({
    selector: 'about-bar',
    template: `
        <div id='sidebar'>
            <div class='panel'>
                <div class='header'>
                    <span class='col_fade'>关于</span>
                </div>
                <div class='inner'>
                    <p>CNode：Node.js专业中文社区</p>
                    <p>在这里你可以：</p>
                    <ul>
                        <li>向别人提出你遇到的问题</li>
                        <li>帮助遇到问题的人</li>
                        <li>分享自己的知识</li>
                        <li>和其它人一起进步</li>
                    </ul>
                </div>
            </div>
        </div>
    `,
    styles: [`
        #sidebar {
            width: 290px;
            font-size: 14px;
            float: right;
            margin-bottom: 20px;
        }
        #sidebar .panel {
            font-size: 13px;
            margin-bottom: 13px;
        }
        .panel .header {
            padding: 10px;
            background-color: #f6f6f6;
            -webkit-border-radius: 3px 3px 0 0;
            -moz-border-radius: 3px 3px 0 0;
            border-radius: 3px 3px 0 0;
        }
        #sidebar .inner {
            padding: 10px;
            border-radius: 0 0 3px 3px;
            background-color: #fff;
            line-height: 2em;
        }
        .header .col_fade {
            color: #444;
        }
        p {
            font-size: 14px;
            word-break: break-all;
            margin-bottom: 10px;
        }
        ul{
            margin: 0 0 10px 25px;
        }
    `]
})
export class AboutBarComponent { }
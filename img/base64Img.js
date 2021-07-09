const image = {
    re_s: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA/xJREFUSA2lVl1oXFUQnjnn3rvbHywVBd3kQchDoftSZPtQKUKFtthdsqGCUgoG0k1aZVvwKeBLWgRhpW+NlCZroUJfgta9a5KSiBS0mj6UpaANVJqXUoMQEFMs5v6cM865yy6Xe7ey6rD33Dkz38ycn7kzi/APVLlDg4HWZdBUJMIhJMhFcNLrALgmAReEFm79ED5+lhvspRi7TbkQ9QXQMIJE8wjStRFW7eeBHQMEv0NOKZXXBMMCoEQaGpiRU1cPYqSP+0wFGL1NwwC6zqB6JitqMwXcjBsk+Ym7tEv9EU7yDitAULl6xGomMd356A/q3Oj36hHvoNAV9smM3aLC2LL/qLLkn4ubdHdgVo6kp7UUBz5/DX+Ng/rlz3xLA0EQrAgS1dk32zuJApgzV6TuSZTH+Bzv9uuwF+70sl8IFSxuk/a+6SO4HgUY/U7NMnjj2uvyw47Ru3eoDAgvgdKRSKBYgkBdN5OsLU96W/ooXzCAUoAkfqsftlwzNTR+M/iYNL1YLzrjwqQip+FIZruotdXtkQGXIdSOIHBECI6tYAdn1X5UsF/9BTswVA7xI0g6oBgbI7SsmuAMPLtIg1bg6TICziezRWjavHZQXorZwalb9CoHpNk38D7LzRPR+E3//Q5v3jOHcfN005/3VFC22FGRtzoTBxieV5qizw7hzymhwYaUEiOKJmk1LvgohoQlV1MI/nr6prR/kELeRw1DQiDm7LD9hcYd9tpBXB/n2VGKaDusm9IieikN+lnylCeD7XGcO58AcgCwiAtXoKQpYr/EjTnA7lNLwUecDVw5eOBflJbRvI1s60wA2h23NfxT5b0MhOuChzUEtTcJYGfHbY0tUJAXCmwJssUrbSHJloWyxc5tXkSes8rMjyft2W+eZWsWR1hQIX9UAI04aPao/aOZTzS9kyTh+pWi9VNcX53zHhLB1KfvZL6Kyzs8Ka60RAsCbNsVGksT39CujjL+Fgr35F5xHsRlhn8BnAeoaU9SbuaTc+yLqCSsjCtMsyCkBvr+ZC8wH8PG+Tz6Sd35t9EnRRtJuZn/SVuTfMGNS2/h46gWVZcp5/nBPYFw7ErR+V/FrvqFXyClFjGb3TddNpfMZKqeBaICId048zUNGNl/oQ/maIDr0w3UWDHOjY8ogGEul6wmCbxIylupuv6/bjhm5b7eWuHsuTh9Itvtat2GY4IYes8Nh0mFdUSsP7fTqdW4cLU1vUdzoU+Vzy1TV9imEnduLFIBjLDqcgMKvQvMjnCv5aYPrhC0SmEm2jZaXg4D3MvlqgykSwKwsQ0zU5+c6KPpmwAdOvslDWryyhykyDV/CJH/trQLG3cqXCOT507GNdnSsUm+/wbrTsG0SLsMggAAAABJRU5ErkJggg==',
    //一画面展示的图片
    screen: {
        1: [{
            resource: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAALNJREFUSA1jYKAzYATZZ7bs34WvvxnlaW33+78MeiwgS0CW2Un9FTAV+08TO3/9ZWAoPcbCIMrLwAm2EGQLyLIgJdpY+P0PyEKIX5ho4iU8ho5aiCdwyJMaDVLywg2PrtEgxRM45EmNBil54YZH12iQ4gkc8qRGg5S8cMOja/gHKbzVBmrKgVpXtAA/kMwFN4S1F/5//+gzgwAtLEM2E9guVQf7ENQiBjVSkSVpwZaTY7gHAE5xI0EaKwWVAAAAAElFTkSuQmCC',
            location: 'one_full'
        }],
        2: [
            {
                resource: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAN9JREFUSA1jYBgFoyEwGgIDHQKMIAdoL/6vz87wfxOxjuFgYVwyz/DJyr+MDP3E6mFgZFylrSYzkwWkgY2JQfThRwa5SpN/BPVvus/I8IeBQf8/M8Ou/3//OxHUAFXAyMB4HsQEWwhisDIzMKRoErbw5ntmhqsfQDrIA0zkaSNf16iF5IcdDp2jQYojYMgXhufD//8ZGJ5+JWzQ19+E1eBTAbfw2x9GBos1rPjUwuV0RYGuIxOALVRhZdj/gJVBgFgznn1j/KmhIvP73r33ROthYhL8Saz5o+pGQ2CEhQAAcu0vSnKzfIoAAAAASUVORK5CYII=',
                location: 'com_two_left'
            },
            {
                resource: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAQFJREFUSA1jYKAzYCRkn/bi//psTAyihNTB5FVYGfavDmP8C+Oj0yzoAuh8dob/mx5+ZJBjZUaXQeX//8/A8O0PI8MDVgYBoMxHVFkEj6CFIKWVJv8YUjT/IXRhYT39ysBgsYYViwyqEBMql/a8UQupHsajQTr0g5SojL/pPiPDzff4i5qvv4kLDIIWcrAwLvnDwKB/9QNhA3VF/zM8+8b48z0epQQL7xs3Huv9Z2YQxGMGipSGiswRRkYKCu+/jAz9///+d0IxFQ/n3r33eAvv0XyIJ/DIkxoNUvLCDY+u0SDFEzjkSdE9SAkW3gyMjKsYGRjPE+sfJibBn8SqpYs6AFA5M7S5iR3/AAAAAElFTkSuQmCC',
                location: 'com_two_top',
            },
            {
                resource: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKlJREFUSA1jYKAxYASZb7Pi/zxa2HMkgjEJbAHvlP//Cw3+UtWO/gvMDJ9zGBlZYKYW6f+DMalCgywAASaqmIbHkFEL8AQORGroBxE8mfZdpI1nwBboizDM3/cEkm4JBiqRCoBmMhwBqgVbMNPwyUMi9ZGkTBuoGlxUXLnx6D9JOolUrKMhx0ibgEdywKgFSIGBnTkaRNjDBUmU5kEEzsmMjIwNSJYOLSYAL1MaYevWqQcAAAAASUVORK5CYII=",
                location: 'change_two_top'
            },
            {
                resource: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAP5JREFUSA1jYKAzYATZZ7bs34WvvxnlaW33+78MeiwgS0CW2Un9FTAV+08TO3/9ZWAoPcbCIMrLwAm2EGQLyLIgJdpY+P0PyEKIX5ho4iU8ho5aiCdwyJMaDVLywg2PrtEgxRM45EmNBil54YZH12iQ4gkc8qTATQzthf/fv/r2X4CNmTxDCOn6D6zXP/9mBNX46uAan5mZwVOWj5GfkEZK5CWAmt/9YngE9iGxBt2581T2199/5cjqGZmYdmqqSm9GFsPHhrdp8CmCyf1mYBT79/9/NowPohn//f0IpIi2cDRbIIceVdgkxSHLf8krLMyvVJBt/sXx6z0ynxAbAMBmOHrmD4V8AAAAAElFTkSuQmCC",
                location: 'change_two_topBig'
            }
        ],
        3: [
            {
                resource: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAASJJREFUSA1jYKAzYATZJzL3P68sB4M5sXZ//s1wf7v1u9d/GH/oEKvnPxPjUy0lqYcsIA0gy+68Z9jNzfqfoP4ffxgYtEQYtv5h+Nb998//AwQ1QBUwMjL1ApklYAtBYiDLbkQBTSMASo8xM1z9AA4YAiqxSzNhF6ad6KiFVA/b0SAd+kEKz/igEgSUqQmBUy8ZGbjZCanCLQ+2EFQ2goorYkoQkGV//jCuZ2Fge/KP4dck3EajyfxnPAwSIVhG3bjxWO8/M4MgmnacXA0VmSOMjIx/cSmABykuBX8ZGfr///3vhEseXfzevfcCQLGP6OIw/mg+hIUE1ejRIKVaUMIMGg1SWEhQjaZ7kBIs2hgYGVcxMjCeJ9aLTEyCP4lVSxd1AEDNRQbgkda9AAAAAElFTkSuQmCC',
                location: 'bot_top_three'
            },
            {
                resource: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAATFJREFUSA1jYKAzYCRkn8L8/xyCbAw2hNTB5L/8ZXh6O47xOoyPTrOgC6DzWVgZlO68Z9jNzfofXQqD//MvA4OaAMMZoIQphiRUgKCFMI2XIv4wsDHBeNjp9nNMDAee4leEXxa7uRSJjlpIUfBh0zwapNhChSIxugcp0Rm/8jgzAxOBgvDiG0YGRgJqCFr45RfDa13R/1uvfyRgEjCgWYCm/f3LuB9fmINNuX37Ld8fhm+G+BQiy7EwsD1hYmJ98+vfVwNkcXxs5v9sj9XUxO+BffiH8YfO3z//D+DTgCz3j+HXJCaGX+v+/iVBD+PvXqAZJXRPNKMWIkcdVdijQUqVYEQ2ZDRIkUODKmxw0fafifEpIyMTqOghDvxnPMz8n+XxP0hxRZQeYE1zgCiF1FYEAKDCRuetOFmYAAAAAElFTkSuQmCC',
                location: 'top_bot_three'
            },
            {
                resource: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAUVJREFUSA1jYKAzYATZJzL3P68sB4M5sXZ//s1w/04C411i1SOrYwFxQJbdec+wm5v1P7IcVvaPPwwMWiIMW+8wMPhgVUBAEGwhSA3IshtRQNMIgNJjzAxXP4ADhoBK7NJM2IVpJzpqIdXDFp5oSDX58ePHnF9+McoSq4/pD9M7dXWpN2Rb+OUHg9nfv/8OEGvhP0aGXqDakuGfaOBBCipBQJmaEDj1kpGBm52QKtzyYAtBZSOouCKmBAFZ9ucP43rcRuKXAVu43frd6z8M37rxK0XIsjCwPQEGiAxChHgW2MI/jD90/v75f4BYbf8Yfk1iYmZYR6x6ZHXDP5UOfx/C8yFyxBLDZv7P/Oo/49/lxKgFqfnP9P88iCbbQjU1qetA/VEgQ0gBwz8Oh78PwYnmPxPjU0ZGJlAFSRz4z3iYOIWDQBUA7M1QNf1hpDYAAAAASUVORK5CYII=',
                location: 'left_right_three'
            },
            {
                resource: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAVNJREFUSA1jYKAzYCTXvtu33/L9YfyhQ6z+/0yMT7WUpB6yEKsBXd0fhm+Gf//8P4AujovPyMjUC5QrYcKlgFbioxZSPWTpHqTgVKq9+L8+O8P/TcR6h4OFcQkDw5NdxKpHVge2kI2JQfThRwa5SpN/yHJY2ZvuMzL8YWDQB0qSbyHIZFZmBoYUTcIW3nzPzHD1A1a3ECVI9ziku4VkF20sDGxP/jH8mkRUOIIU/Wc8DKLItpCJifUNE8OvdSBDiAHM/1keg9SRbeGvf18N/v4lvvD+x/h7hBTe8CD9/5+B4elXwrHx9TdhNfhUwC389oeRwWINKz61cDldUaDryARgC1VYGfY/YGUQINaMZ98YfwLVmhOrHlkd2MLVYYx/gYIfkSXwsd+DJG+DUzk+ZVjl6F7SjFqINR4oEYRnC1INYf7P9hhaXBGllYmR4QBRCqmtCAA7kk62U1NVvwAAAABJRU5ErkJggg==',
                location: 'right_left_three'
            },
            {
                resource: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAHRJREFUSA1jYBgFoyEw6EOAEeRC3in//2NzqaYQw4X5pk9b///9txqbPCMDUzgDw/+Q/wz/Q7HJ62jIMbLAJB7H/4YxwfTWh4wMEy/BpVHkSOEwkaKYHLWjFhAMtdEgIhhE8IQuu5AVQzEwo42C0RAYCSEAAJ+TFFEXD7uAAAAAAElFTkSuQmCC',
                location: 'one_col_three'
            },
            {
                resource: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAASlJREFUSA1jYKAzYATZZ7bs34WvvxnlaW33+78MeiwgS0CW2Un9FTAV+08TO3/9ZWAoPcbCIMrLwAm2EGQLyLIgJdpY+P0PyEKIX5ho4iU8ho5aiCdwyJMaDVLywg2PrtEgxRM45EmNBil54YZH12iQ4gkc8qTATQzthf/fv/r2X4CNmTxDCOn6D6zXP/9mBNX46uAan5mZwVOWj5GfkEZK5CWAmt/9YngE9iE+g+7ceSH26+/vOmQ1/5kYDzAw/r/A+JehAFmcgZFpo5aa9G4UMTQOvE2DJg7n/mb8I/Dv//9suACQAbToLxMzw+u/6OIM/54ApfFaOJotkEOSKmyCieb///+sd+68kkO27Q/n7w8cv6W//vnzShpZnIWF7a2iouAHZDF0NgAM1E3MHIVT4QAAAABJRU5ErkJggg==',
                location: 'big_top_three'
            }
        ],
        4: [
            {
                resource: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAATVJREFUSA1jYKAzYATZJzL3P68sB4M5sXZ//s1wf7v1u9d/GH/oEKvnPxPjUy0lqYcsIA0gy+68Z9jNzfqfoP4ffxgYtEQYtv5h+Nb998//AwQ1QBUwMjL1ApklYAtBYiDLbkQBTSMASo8xM1z9AA4YAiqxSzNhF6ad6KiFVA/b0SAd+kEKz/igEgSUqQmBUy8ZGbjZCanCLQ+2EFQ2goorYkoQkGV//jCuZ2Fge/KP4dck3EajyfxnPAwSAZdRt2+/5QOWjYZoSnByQZYxMbG++fXvqwFORWgSzP/ZHqupid8D+xBU6pNSEIN8xsTwa93fv8QX3v8Yf4ML79F8iBYTlHNHg5TyMEQzYTRI0QKEci7dgxRctIEaqdB2I3FeABbEzP9ZHkOLK6L0MDEyHCBKIbUVAQAcmFs0RBwO9gAAAABJRU5ErkJggg==',
                location: 'square_four'
            },
            {
                resource: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAVJJREFUSA1jYKAzYATZZ7bs34WvvxnlKbGbg4Xh7dloRhVCZrCAFIAss5P6K2Aq9p+QeqzyV98yMmy4z8QJkrx68/FMIMWFTSE7M2sx2EKQJMiyICXyLORjYwBaCLPif/j//wz8MB4y/f8/YwMTsgA92KMWUj2U6R6k8FRKLa8w/meqBGZudmzmMTGxvqG6hf+Z/39i+P8fmFEwwW++v/+obiHDv/9TceVD5g//DtE9DkctxIx5CkXoHqTUT6UMDDsYGBm5sQXELxbGr1S3kI2JqeQXExPWkNNSEKV+xv/179+V/3//Ya0P79x5pYLVJdiCg1pioxZSKyTh5tA9SOHZ4tdfBobvf+AOIYnxE1nff4ZvDAyMrNgM+Pv3/z9wQ1h74f/3jz4zCGBTRKyYGOf/n3eTmTgIqQf78P1fBj1RXgZwQ5aQBlzyf/8x/sIlhywOAKXJV0nWq9vBAAAAAElFTkSuQmCC',
                location: 'left_big_four'
            },
            {
                resource: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAVlJREFUSA3tVrFKxEAQfbPJnRx6IBxXnEVQQezuA7S01cbSwtI/8AcEFez8ArHR3s7SxsZOsNDC4sBCEEUQ7y5md9wkCCnGS1hCBMlU4fFmXjKZxwxQcVARvZVzPn4PsV2EO4nzptH3Y8Ld/WAfoEAkK/9w54YXetM8u7VkREoeGGpg99pHt41WIsigdTD3pUTS+iTG52eAzUWWKLnYMIoFU5rKZZdMqAVLbihQeUuTKSWFI9KqK31Ow8ODhLtiiSC0+mClm1KRr0bLuqi8SH1IZg8Gog8xGq+VJ/cH/7DyoakFy5yXpFbqQ+CKiQZSdY/5RcJdsdSHzakDMpHoQ8/0ngG3tSS9VOrDcHz52z4M8WR9OCflOmH1lDq1bVLS/2/pjw+H9nL7lFqhPE7WU2SdEV9fLjHK5BU6hFfPzMXtK224iGVz7F26XEiwfcodew50sskuz0GAx28RclJzq9BEIQAAAABJRU5ErkJggg==',
                location: 'right_big_four'
            },
            {
                resource: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAThJREFUSA1jYKAzYATZZ7bs34WvvxnlaW33+78MeiwgS0CW2Un9FTAV+08TO3/9ZWAoPcbCIMrLwAm2EGQLyLIgJdpY+P0PyEKIX5ho4iU8ho5aiCdwyJMaDVLywg2PrtEgxRM45EmNBil54YZHF7y2uPqWkYGPDY9KCqR+AmsLGABXwMZL/9/58OO/DEyQVvRfJkYNWpmN01ywD0GyV28+nsnA8D8cm0rG/0yV/5n/f2L4938qNnmg2A42JqaSX//+XcEq/5/hm7aGnBRIDh6HQDbX//8M/Ng0AF3FzvD/PxsueQZGRu5fTExM///+w6qfgYGRFWbuaD6EhQTV6OEfpPBscefOC7H//xl5sYUdExPrm998f/8xf/gnhk3+FwvjVy0F0Td37rzC2nr/+/f/Pw0NifsgvQA+RVMO58eMyAAAAABJRU5ErkJggg==',
                location: 'top_big_four'
            },
            {
                resource: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAATpJREFUSA1jYKAzYITZd/Xmo9b/DIw+MD4yzcjE0MXwl+nLf8Z/TcjiMDbQkIMMbOxt/3/93AkTQ6aB8t+11WUtQGIsCAlGOYb///UQfASL8S+T6H+mv2wM/xiwyv9nZHzE+O8PGy79QI98g5nGBGPQix61kOohTfcgRaRSJpZ2xr9/52PzEiszw63frJx/GX78dMYmz/z//xvmf5IvfzE8xSrPxPz/L0wfOB9aLf8/kfH/f0WYIK3oS78ZE8E+/PiLIU6S+7+AAg9trPrzn4Fh7V0mBlFeBmF4kEap/mMIUgLK0AB8/wOxEGQ03RPNqIVUj9HRIB0NUpJDYDTRkBxkhDTQPUjhtcUvYBUJKtVpAX4gmQuugLUX/n//6DODAC0sQzYTWB+qg334/i+DHpDDiSxJC7acHMM9AHyKUuS6hYm/AAAAAElFTkSuQmCC',
                location: 'bot_big_four'
            },
            {
                resource: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAStJREFUSA3tlr1uwjAUhY/d2Kj5QVlg6ABSlw6V2GDkIXgXHoiFR2HmCTp0SltQhgpRtTjgGySUH9dDJGdAuVNyfH2/+NiRL9ByMOLN1tn28MfGrtmpwsQjCMHmTyqeDs9OmL8KWG48DCI85kCiEGzx7AZ4PBHwuhbuZEmWoh3QYk6zoc7SZr5ZZnWWWsxpNtRZ2sw3y6zWLb1dT9WPOil9iRWCMwbGOVRN52B6TGWVfJ1Lc6phBKosQ5J8lXID30cY+vj43JX0KArQkxK7fVrS47iPMPBLGr20bun9A417qI9HzX8phT40Bl1IPHi8li+EsTSMKteFadNN8b8uTOk17QakVo66KxfxU6ib/yivq3P6/o3YBaxYU/elL/kKqSOmJrU46OJ5NMLbBRrnOXR7jl5+AAAAAElFTkSuQmCC',
                location: 'full_inner_four'
            },
            {
                resource: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAUpJREFUSA3tls1KAzEQx2eS9RtrRZQqfiFUwYI3PXr36lMInsU38D28ePANvPagV28KLQgeV3Spsm3ZmIzJCpKtkkJ0PSUQ2PwnMz/mT5YE4J8HGt7ehbpNBa6VzU4k7EQGYmD7S7K6u0ClMDMJcHIdwfw0TORAQzGww41ygL13A/zshZXSkqNoADrM8QsFS/18c2QFSx3m+IWCpX6+ObKCpQ5z/EL5E6NxTkncpeoo9ysyLIv0vf4m0Nz4W/mNzzkcrFRwZljib+I1nfySwWPe4WChVuu5IlT3zNaJwc0YsmYm1amtI2NXhPIBJB7ZOiBdbm+uNguaXny9aeyAGFFTqk/HtoaSTYoI7xUN6Ep2GDKSpAr7de6dnt+A4bewXf2T7x8PDRHxdjteLxLUK0BNz3jZ1rPxLJnlvJ+mfNHW9fF4qtfn9P7i+AAqNF0PU5luYQAAAABJRU5ErkJggg==',
                location: 'big_top_min_bot_four'
            },
        ],
        5:[
            {
                resource:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAVNJREFUSA3tVTFLw0AYfXdJKEEKHbSDWAUtOAgtCLqI/ggnp04dXf0rToK4+AP8By7OgjhI62DQpQgZakjbNHfenXwZQskQvEy55eW+l3uP793BB1S8mPY7vhfPUcJ2bHuHKXquNtFmZ5tp66gtrXguUuDqycVGE74x1C7a7HzXjmG81IZ/vXArLRWI1oYF4ZSj6kjL5VZwqo60IJxyVB1pudwKTlUeaTaewjnDV2RnPM3UeKJlJv7BnQyDKVpUtIVqAO+bDic/6LgeHFtGpDsYYGo6fH0LblVxjwhC7vpDsYxvaE8owV+YxCOYuKQaoRK8lmAngOxTjdDx/QvTofrhEFL2iMhwkTQlw2m2pw8mOBh/l3IFx/GgtPqrOGcu/MpfaW1It/ZvaF7paPS5BXiNvGq32w7G48l2vp42eOwlTiREsp7nOPe+Ey9d0w8kzym9j1/xc1oI6pg+HwAAAABJRU5ErkJggg==',
                location:'top_big_five'
            },
            {
                resource:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAUdJREFUSA3tlTFLw0AUx/93janGClHMIEIHC3EQAupSt+5uTn4QP4Oj38Gt4GfQbyCCIEgHCzp0EMwQpO0luWfuhBLOQgkkTnfTvfe/e7+7fy484J8HU7yX1487YghNtstal4LyoZnnoCeA30vQlakB7IZBDgjsxNTanJ07KqlhRJG5IJfwwP7mJUNSnPQZS/YwTgEIvWUa4La5CWk6tsDaHdavdDyOfSGm+gGVCWG49zUaTXbKOTV3nPWU8+25EJOOqXle/i3EpptlszVTU/U0sD+kB5FSz1xQd/wp2Jm+VTLH8WlAfrRLdTN0vTQHrh9bCLbQWdg42Je4OGgGOM1+gYpuf4vav6m11Fpa2QH7aCpbtmqDtXSVQ5X1RXsSRc9SbaSJMSvV1R3/6Jbi9wR+E7ByzaIBH+obxjmiItgoi03Mu128/QBPXFwYY5hq3AAAAABJRU5ErkJggg==',
                location:'bot_big_five',
                focus:'5',
            },
            {
                resource:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAVBJREFUSA1jYKAzYATZZ7bs34WvvxnlqWH3qy8MsgdcHk/+z8BohG4eOxOjNwtIEGSZndRfAVOx/+hqiOa//8nI0HCKmYGFlYEZqEmZ4f9/PUzNbOxgC0ESIMuClMi38OnX/2ALMS1BFWFC5dKeN/wthMchNQOTiYUzheHXb150M1VUxB7RxMJ/f77P+c/IYItu4Z07r1SGfxwOfx/SJNH8Z2C6zMD4DyP0/rIzfaeJhYz/GQ4yMDLdRU+lrL+Zv9LEQqDvcv7/x8wW//793ojhbXRXUZs/aiG1Q5SBJokG2G6ZxsDEsAndtUxMrG9oYiGwPWMNbGLoo1v4m/XvMppYyMDwXx9btmD++Y9z+KdSeJD++svA8P0PeqgTz/9BpF64haXHWBhKjxFvAbkqwRa+/8ugJ8rLwEmuIcj64uIYPjM/5owAJRBkcRAb2KZ5CAAQ1FbQ4uvP1gAAAABJRU5ErkJggg==',
                location:'left_big_five'
            },
            {
                resource:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAWxJREFUSA1jYKAzYATZd/XG49X/GRnU0O3mZuOxjzwpsO7zTwZDdDly+O//MuixgDSCLfv/Xw/dkF+/vrP8+s2vbCz6X8BB+h+6NNH8X38ZGEqPsTCI8jJwgi0kpFNP5D9DkNJ/Qspwyn//A7IQIs2EUxWNJIa/heA4ZGNkjvj7j4ELPRTV1CXfMZwiP+7QzQPxwRb++v93BQMjZiq9deu5KAODBDZ9ZIsN/zgc/j4EJxomhv/n/zEyfEZPCSwsHL/RxSjlQ4s2pr3AUvwSumFMTII/gSUtujBFfLCF/xj+lzBgLbyfLxrNFqSG7wjJFgwMjH2MTP+B5SYq4OL8+xVVhHIeOJUyMvxzAKZ+ZXTjfv3ino0uRikfbOF/BkYjbNniz58frJRagK5/xCQadI+j8n8Dm3mglhe54AeSXmhZit+otrPMDCBMDQC2kJ2J0ZuBgY0d3UAVFbF3r48wWAIbsDzocuTw5eQY7gEAxRZZl/fpfVoAAAAASUVORK5CYII=',
                location:'right_big_five',
                focus:'2',
            },
            {
                resource:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAAAXNSR0IArs4c6QAAAHxJREFUSA1jYKADYITZwTvl/38Ym5r05xxGRhZkAx/H/0bmUsyWXcgKNoOJYpOIMGDUEiICCaFkNLgQYUEEa/gEF0qOh+VQIkJg8CmBF5BXbjwiqoBkZGRsAHnj////YBrExgd0NOQYh0/E08Un+IKTanKjEU9SUA6fiAcArM4X7QPhU4QAAAAASUVORK5CYII=',
                location:'top_less_big_five'
            },
            {
                resource:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAWBJREFUSA3tljFLw0AUx9+7xGARbZcWUYpUhIIFNx3dXf0Gzi4urn4Ev4MOTi7iFxAEBxe7uEgWpYsNpi2aCrlcnrmI5ULhCqdxukzh/+79f7z/JdwB/PODkrdzkXYjjmtlswcCtlwJkbDdFVHbblApzFgAHN+5UF+ESg6UFAnbXy8H+JlI4PcsrJSRNKYWqAnHrGQjNctN02Uj1YRjVrKRmuWm6bKRasIxK+VXjM4ZDfpjqnmOmcmsLsrO9XeO8sRv5ye+48Becwmrsxp/U1/OmsMYXvIJpdEjkYdPvdOCKcGD585dx4KfqDoxvAGkLgo4UnVAdoUMQxLiQNWzAc877ea91CZ3GggCLyU6VBci4CXH5HZKFyCYA4GYWp/20pSegaDgw5BJWA60v4Wa8J+8T/Zws16P/FF/Q3XNvt6PVqsR+n5RTyp8OM9XowSKuut6b+MFnngjKvjEVXz98f0CFMNtzndXgxIAAAAASUVORK5CYII=',
                location:'top_big_half_five'
            },
        ],
        6:[
            {
                resource:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAXdJREFUSA1jYKAzYATZZ7bs34WvvxnlKbGbg4Xh7dloRpUrNx8dYWBg5MVmFjsTozcLSAJkmZ3UXwFTsf/Y1BEUu/qWkWHDfSZOkEKgD3T+///Pj10TGzvYQpAkyLIgJfIs5GNjAFqI3Qp0USZ0AVrzRy2kegjDEw21TGZkZPBj+M+E1VwOjl/PsEpQYrmWmtwhfPqpbuHV24+jGf7/B2YUTMAsyLmG6hYy/Ps/9f9/BqwZn/nDv0Oj2QIzIigUGf5BCk+loCoGVOqTAy68AVerMK07GBgZuWEcZPoXC+NXsErjpf/vfPjxXwZZklQ2DyvDh4txTBKk6qO5erAPQc0CUE2NzTZQ2QgqrsAlCDBTY1MDFNuhrS4XAZK7euPxQwZG7DU+ExurATQOGXlxNgtgBTGwuMJVgqDEGdAyXOpY/jAxD/9sMepDHImSfGFwKgW1iBkY2NixGQNqFoDEQZUnqD7DpgZUgsDEwUkfmBphfGRaRUXsIQCf+WHp3Vw4AwAAAABJRU5ErkJggg==',
                location:'left_top_big_six'
            },
            {
                resource:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAaVJREFUSA3tVk9LAlEQn3lr6qLSHygISirMIkM617FjUNApErr5EfoCfYeOXYOoD+ChSxIdOtQlweiklhAEFRTl4u709tlKsNOqi3UQ5/Le/uY38+PNzuxbgH82tPUKxcoxISQ5bUnIZq8mMq8G7HD+TrBnE9IBO0CJEaX5YBFFounxCA1tz1o8pQVqmAC7FwEYjYGuBFvwlXsqCrA5Q+1QXZyPui3YgIXL+8dAX7DrBVZNY7c+gJBt4baoHr12o/4RJZiam7z0SrFy6G8cuJxKsFB82ABhjnAEDOq57HdLc/5OMSVIaO2BBfzgf9ZWO03qxe+PhVd1fPl6v6TO4J8RYpmrkUb0ZOPVd4DTe3V9cjRPrCZvC8fayrB8ZB48vmHGCfK7mgLn/cb6jlMnvLktn8vNIpcFEdYXkvF84a6SAYv2OY7Ecqm5+Jbtk78rJUAa5HgiOLCk3iEAxoh4EpBocIiCRMAmAsRIU0CK/cYL1IXW+2PRP2GzF7q1UR0YErgGEAxxScNho2rj2rB+or1YeY5jBFB+hxqmWl92o/P8c00kxkpf9e1j9jPGlZsAAAAASUVORK5CYII=',
                location:'right_top_big_six'
            },
            {
                resource:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAZFJREFUSA3tVr1Ow0AMto8qbaVUSCDY6AgDiLVDR0YEqI/AkJWHYOY5uiB21kqIASEhEJXKAEMRTEwsFEhjzkcOpZWvPymEJZaiy332+cs557MBMhZkvnbn8ZgQViVubRCsr61ctDtPe4TRocOmpW0OWHd71z0DwIpkV1S4XWCFISPalIwAlG9w1V+ACEQbQuzatfoDN4ho3s4HR6+oBoG/n+WEvx7jzENqTikf/Z/TOLQnv+xfMYRe+RR671tDajOdI3qxOCLsAinj12J2LJU+nk0eWsA11pq0XwBquPST4jefqP1o4aQGzjNBeGfBOTVeQ9ipLZNgMR4K9bKTewVLFViME1/fII6ktmFksqN6f7x3weIt/CZkVeaHJicU/shsUOYhtYnfSpaY5B6SSZ3E074bQls8XU7qzcilmhr/n5ByW8CVWvpcvhuDS0mTDjMh5R7E2RY4LuJ0dPlNkzZuI9bF/3CERaziEsO3fhrpJdZNTMj1jJ9ZxRByRwzgFSVn3BboSn3NxVPST4NVq/DwBUL3Z6g2u1GvAAAAAElFTkSuQmCC',
                location:'right_bot_big_six'
            },
            {
                resource:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAalJREFUSA3tVr9Lw0AUfi+JaUNb/AEWHBSVaodKcXZ1FBRcFAWX4upW3P0PHPwbHPQP6OCiSAYXlxZanNpqFwXrULShyTO5cqE/rsZIDSjNcrnvfe++u3ff5QIQ8IOOXqFYvSCEZZG2TThMJWfvCsWnLULrZADn2uYcObF8qXILgDERLyThhuIEmBhRWkQCkKIMl8wpsEDIIcQKz7UnuEJE47zf3aohqRv4/d5IcOg1DrykzKWO9V039qwpqkXvHQhVLQcfzfWeMOvKRC8cR4RNIImNyzHehsNGjZ3DtXM6RaIFHvhJSzI96ztyxiuXzeTNgIOZCE3Mt0+cV05fvNYAKNWxaQcyhYfqPhCpfSQbkCe1S3fpe0sWbC+SiOeJXT0iHOtym2fRGREID75ct24CN81I0HP//BICL6nrUr8z/YKfA8SIKG4o2Bi6YCo5tysS49jfL6n9u1IGFN/4kjq2OvSSOmKDvjRKS5IDL+n/F3T30DAB3lvcvP7apo88VzCrK5DV/Ql1suPa9642JvhqQno6BlrnAH7fTQsNJ4dZ33ajKD+RiJc/AfmMaHKhHxgoAAAAAElFTkSuQmCC',
                location:'left_bot_big_six'
            },
            {
                resource:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAZpJREFUSA3tVT1LA0EQnbmEfJCI0ZRBQkQREYIWNrZ2goX2FvbWFoKN/gDBykKCgiKC2KiNha1/wFNCIqgoGkWM4Cl3ud1x785NsnKVsQjhtpk3b97u7M3N3AEEK6hAu1cAnQtO7NEqAM/6XbZiayvXc1jWSw9jSDTjpyGk4shg364T04v3S4gQ89Mlosm1sBN4t2ChNwqpTFKVnd4hZHvgQLBlIDbKOSyrih8P8VggN6G4+KLQdfvpLMvcdhM6wflhDrP9pOjy+/WwwrfiaK1s/svezk9Yf0l7JQ3On9QiGRZAOqFyrXpuwlSE7xgMc3pVPW4oDfBiQslj8VLM0Lqq8DzRaheSR8QNIIhLv9na8VrVTbg5XtkSbf9rKDxpLJx8zAkYD0duTGYdNh8gsZjDV4k1rh1RiNcrJ3nHxmoZww0wxgpAlG8OSvzJjEmBz75sc4o4FCSvWG8Opx2OITsh5j+HNjwPdH6XBk+o9MZ/OLJ9y+KXEvI/kD4cHgneAEH304j5vG3weIVIXQ2/gRBt8SkJVlCBdq/ANwBtddEb1KRHAAAAAElFTkSuQmCC',
                location:'two_col_six'
            },
            {
                resource: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAAAXNSR0IArs4c6QAAAShJREFUSA1jYKADYITZwTvl/38YGx8tzcfgsdb8icX///8b8KmDyeloyDGywDgg+nH8b2QuBrvvIhPDqnvMGOKEBJgIKaCGPIpPQC7FB46/gIcuPmUYcnBLGBkZGiZcJBwUnGwMt5iYGH78+8fYgGEaDgG4JcfdXqzGoQZFmOXf/88M/5iv/mNifI0igYcDt+T/399X8aiDS/1hhPjg/1/iUhdQIyP+SIAbTRlj+FgCjxNGBqYwogKFiRkcd4x//14jSj1QEdwSYjWA1GmrSoIsIN2S/wz/VhFjEeM/cKpqJEYtTM3wiXi6+AQe8YzMrNqwMMRHA4uVV/jkscnBLWH49ycUmwJ0sX9MDAeAYgfRxfHx4ZYQW9NBS1+SLKFLnAwfS/DFF9XkABLCREn3utMtAAAAAElFTkSuQmCC',
                location:'two_col_not_av_six'
            },
            {
                resource:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAZJJREFUSA3tljtLw1AUgM+5SVsL8TFo1FIt2kHra9PRzT8guDgo6G9wEtwcXN0cO6ijP8HNSagIVmmLCD6oFszQSG2ae4+5qamdIgTSKRfyOuee83G/BG4AejxQ8lbOxM1XCzNhsw0OS6qESNhqig8t6xQK0+IAe1cqjPRD0gVKioStT4cDbNgS2F4LC2VJPk0joI+cYKlIaTBvPlWRUh85wVKR0mDefKoipT5ygqV6rrSz4x/fKnBaCmfHF11tXaAWg32FYarB3X+qYK7+qVocBniwodohEJFaLL/ueHWI7JpxZnBmr3mxOCoXLWrlCNisjBFBc2Emnb8rPW8CoObOE1DRklrBbJobXh0qdDmXnSjL547SYq3WR0KceJMIxAEp7J74X0ygKBDgFpHY/Z1nONe8Az4CEmkZY4jnptU47O6FxLadlAvs+UfTc2D3O8RK5WNaapEjHk98JhLfVr2OY+2IPOsvANUBR5xzANiq4Lmp8afi41smxhX39SBSPZsdNZxek3KOHNYgvs/ruinvfwATDYRsX6vntwAAAABJRU5ErkJggg==',
                location:'top_big_six'
            },
        ],
        7:[
            {
                resource:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAapJREFUSA3tVkFLAkEUfjOuFkhhIQRRlwwJEaxTh+gH9Bf6HfUfguhS0K17pzpFhy5C0cF7EBpGqLBRZlIbts7utG9aZXfSRsMWCueyM+99b76dN+99DEDAgyBf/ICPzY7Ccq/cL024PV15emCkke41hlNSSc1N32kYgGQ3NTiLhrkyvsEAUnE4YfC2bTGeVQa4AELojjPdEIRoQ7LrdWc3xdi8DMHVs0iMAtnZTTubf886JBx4bocp/fspbTc+Kgg2tWrk7glER1So7n5BiNqIctWLgiAZY+RYg0jZBnO3+9aSh5NztAiNKhSq4442LkmQrkskozT8aNrGogxamJ+5yOcraZvymNcX4pFSMjlVFCdE1e9HiPFkFMwjy/oq3sViLcbA3uMWrHoJbdIU4j3sQ29WBjIPPKXtPuz397EasUDkuERisq7r+pphRHx7UzrxjlifUQ7+bo2lj9UoY5CsWm9uAZgZr4/A66Gz3v8xIfaZXPpI8HkyM8O5vy2A0Bz6A7/D/08o7hAfqe67EdOsHo4Qh7hWcuXKh8dqFAXi3lnLSQlkW/NAvx8OE5Djzr3D5gAAAABJRU5ErkJggg==',
                location:'one_seven'
            },
            {
                resource:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAcRJREFUSA3tVj1LA0EQndlLohAiBhRBtIkSNIgoFhZiY68/wN+hvb2IYGHnHxDRSixsAqKgjViIJuqJJCLBj4iaGC97GW+WEO5C4h2iASVbzc6bmcfO7D4WoMELma9jjUK9rTDulfu1CNc7E0/3EgtDXnNI4G0s0n3j4wQmu8zCbtBPrvkFCRDrgG0J+UVTUtw1oRyAKJYsc04Rso/Jzmetai5r/kCD02fVGJfI2rCo7f49b5Pwx3vbbOnfb2nl4bOC8KN2W0cZhGCLW1R9XBGyNrJceVEQJpMSt3wQSJfAWKlfugoh3GOP0qiLi8c2SxtHq0JgoL9nP5FIx0iDsB1jMiH8D0YpN2L3f2VrFEhFo126OiGrfi0hTibvOk2EZTJpyl6MTybA2DRN7+JdwqIS7+Y7tHfyR+yGt1RdmoG+7kNdz7ZXHyESCb9kMpmZXC5Qea8cI0T4oyDTnr8k9rqq0NlVapBMWLUDbOs6TL+bxgKSMebAMLchEE4cPo8bRYigtZXInKzOkbLgR8BhInJgSHAM2vcIGz7D/0+oZsif1PK/0THGUAjy2Tdct+Z47AAsIdbIlyrLlQOqt7EuWbwe9qv+Tx8QliTy81lgAAAAAElFTkSuQmCC',
                location:'two_seven'
            },
            {
                resource:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAcNJREFUSA3tVj1LA0EQndlLohASDChC0CZK0CCiWFiIjb3+AH+H9vYigoVg4R8Q0UosbARR0MZK/IieSCIS/IioifFyl/HmMMt5xpyGmCJmm3u7b3YeM7v3WIAaD2S91mUKdDbD8E+1n/NwuTnycKtjrs+5p6crvH98kehFUIJ2jgRexyLhKw8vsth5Grb8XrLHlMQ5HSDWChs6ZGcNnbadQaqabiEDFgtkjNo5RDFnzqcsQSZY7GTSzOYypvcUOHq0GuMSWZoWpZf/brX+BeUZ/raJPd0du2dnN23OfZFI6ElVYVzXc147FwhAlucVC56eJmMGwrw9KeNUKjXxamgzCNhv59IvuGLOlyoWJAVCZNCYPSnjTMbnQdKGiOjzbwF4yPw/ujTsIPxTu42DFIK/yS3qe946Q/ZGtqufOAiL6Tque8CXLIC24EwtROgNMLOKBNaZSZ5wh7HlUfH4fdD0xkFJugAWE8J7pxUyAy6hklbIl4hG21WrQnb9UkYsox2AKxOgrRnGV/N2hMppAfOWedf/LW1UKA+9WqDR0mp1Uuap/5Za1saP1I93oyy9LDCNWCFP4sOuyoYWSYGwXcQ1/b4D9ZiSBqyQmecAAAAASUVORK5CYII=',
                location:'three_seven'
            },
            {
                resource:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAcVJREFUSA3tVLtKA1EQnbmbRyF5oIiPRlBYAiqYxsZC8A+08gf8AEFb/8Am/kfEIoVdRGMhdj7QZDWE+IIkqynycF/Xvbuy7K6Lu0qwiLnVzJyZOdy55w7AHx9kfDe1Wow2pXk3d2pm8uxaeOEJakkHxpGnpcK4OIWw6Ih/44htuKtsYDnEchiZqqgFd36x+DwKoO6plK7YMVS0zDTC4e0r5IbC1A552l0FYHYY9isAawahZ1aAYDJK4WJd7+ZzNk84KL4ZwwTik9tzuP8JjTdkajQF4pwgz080BEFc1bT3iB1JJEhH95ftsaC2Qcikz9ToLmJkktbZ0XWctmP1ppLV/bI9FtQ2CNk/c0ufNTBvRtPU/S0AL3X4V4T/RDRB5+/Oa8kA26ecO/zFP68hxMNm2Nw0+m5k68qdydTIBILmm1kwIXAkKiCkRiB39blBLNDDiEUBZBkPGGTsm1KpEVeg7VCiR50VCkHkgZBwXdJaC1bQx+BopMrzY/fGDRXszqkKzfvUWLAGUoaAlFXVH9SgvKs32Op/lQ5uaAmlV8ZgpL2apNWn/0dqrDZK8BGRsNUT7FA85mioqpnrKlANQcgHSux10ge/6psdLtVFIQAAAABJRU5ErkJggg==',
                location:'four_seven'
            },
            {
                resource:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAWRJREFUSA3tVr1OhEAQ/pZbOJAzcDFSWJyJjYWJnZY+hO/iA9n4KNY+gYUvgBfluGX5cWcgkLPYGBLOhi02MzvfzLfzQbIDHHkJ4rt/qd8yLS6n5k4r3EoiIbKHiyq+S5pJOIsKeHqVOD9FwITEQmSPV9MQ5iURtr04k7RkKToTWsQZF5olHaebJWuW1CLOuNAs6TjdLFmzpBZxxoWOLmn/4tN9d3mOLNvx1cMwRKEK6FKzv44jpJ9btqUr4XsevjvsymD3SqEszdNu1joy2G2HlQa7ivictgPCqqqhVEsQBMbWGrpo/bpp+pgxIRey932/htYlig7bNEMdwvo9HfC/koYnAZZLj+8jnQV8Y1NntDzXRZKcse0IAUc4B9jAH7DuL2yrEacOktIop2rTsClEq2Ie8lsgTV4QLjsGClD8j9h9+2k5l8vdPDfpxxdiPplwM3PpNf80NBHTkDohF5febPD+A7srd+E4Llu3AAAAAElFTkSuQmCC',
                location:'five_seven'
            },
            {
                resource:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAZBJREFUSA3tlj1LA0EQht/Z7CUGI4ro+YEiSCyTSi0F0cbW/2Llv7CzELRQREGwEazsrFUsjAoqCX5UolGjueyOtysrViccXKrbcubdfZiHhV2gzYsMb3pLn7wHNJY0+1mhLA3EwGaGVc+Uz4kwmwpYOpbo70LeAg3FwBbHkwE2Wgb4M4tIZKSIQ1NghJx4rVRpPG8Ru1KlEXLitVKl8bxF7EqVRsiJ12q70t8Xf+Usg83LZF58/edYCyx4WM4IGm4o+6eK5+qfXaU+4KKFRwtcn6w9aVD48wgXc9WjbCVAMO/OkCz2FHiOibtNTZC4ZaFuWNGsyxRyhd23r/oCQAVb07iWJO5bpGdcJkt52JHOK9XTEFT+adAhgdYYescFpSenVKC2GDxhakTYJ4g9zXrDZYRESSs6CM8ZtTUS22HuiLVedZlcJlds+6VpO9AqvbqqjQBezoweeOKjt0O91us06FQAfo3o3meWWVNrSnpHJ96yLzzgMs2iX6WbhyFPZey9IOI6s/cJtPpdplj0774BelV9DEz8XrQAAAAASUVORK5CYII=',
                location:'six_seven'
            },
        ],
        //八页面
        8: [
            {
                resource:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAZVJREFUSA3tlr1KxEAQgGc3iSGIYCFXiD/gpfZA0Ea0srOz8gEEm3sI30G4SrCz1yfQ1koQi+POwqggh3AcGI8zZsedVQI3CSh3yRXBhRSzsztfZnd2ZgAmPATxNs7UTRiJ5TzYnTdYvNx5PEYQa9yeK8WuTZME256PZ9cryNf8We4OBBxdW2A7YOlNVUBcTW+ecg2QFATbWxkd+ByiAaYhwzNyWCxeKj8wucM8D1Pa3gF8RDPcpu9XgkKA6rN/ggK2OLDd7vjlv8Pye1hI0CDIWxAqdXqxK/uFAAXCFQh5z6PUiaywEKD2ro6YfhZKRecpt/lf5S1PHJgcKdUzKjGjjpd3U8t/3Z4AqXjSV/QwQGoLfir12LzuoeiJZtAACRfcmJTOqzmHu2ZwqpXV1AKd9SkR83l6Z9+hr+pcpw02dD+zCYA1rrM8b994aBqerB5El5isrG8etX5nWaFvPEOsZemsgfImHqX/QH7vY8smSlutpwUAx+XWqAfRbcESn6esT4lY58Y5rqPQj5x4mgKE67S9hy/ExX9bP+Xe8AAAAABJRU5ErkJggg==",
                location: "first_8",
            },
            {
                resource:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAcBJREFUSA3tVj1LA0EQnd27M15iMEIiimJhQgSLBLUU0d9gFZtUlpb6N8TKShCsBMHC3sJG0EZUBE1iYTQERBQJIeYut+veJhYZL99qcThwxcybmcfszM4twB8Lsflubh8POIEo5vb1DSyunAUOC2WYwVg3+psFMdUOlGScx3ASwyiphjkYngvxwNIYw3DbumEBbJyqEPKDLglbRcaCHJYneSu3hnipYhNWYdrQ65cA9xPKHvYRJWEx8OJTjE6NvsJ5973D+WxdEhrc2gfyfUpTqXwIYMQprmub+3vo/grl0FDgF4xAAU+Cqvab2NarXltt9Fhs8SucjNKhsti02NyTLgkZ8HVwXN75vf9r0en51nrYPOxddDJXbO7TDP0Qv6cvaYtw61IB+/sJqRGSTUK52Jv14tWtYo6TaVWr7tx6tHMtmYRC9U1zl90V4WGcgqr6KquUdrCdA70mHE6AsDWMiYTbHMi8uE5xjCm6npAVCodZp2sBhukX750FHCiIKBB6z7kDRuFI5Io7YUqZ6e7fpe6vUE5pOv00DqB58HBEIsPZTOZ5AtstDy1pplJkzAxijFLtxdQsnz0gGBP5Hj4BEU+CvRgPyq0AAAAASUVORK5CYII=",
                location: "second_8",
            },
            {
                resource:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAaJJREFUSA3tVr1OAkEQ/nY5QE+MocBAQ6GEQGOhjXT2voC18RF8BksfQDsrE5+BztbfaKJX2JBIYUJjiHiwt+5MKMx4ORMOLdBJrpiZnfnu5r6dGeCXRRHe/UPnzCrUJXZOZXZCa06lXcNeAbodwe5LH6AOFaItC7UufXmttj0yMpi1a/KAieBDfbVHCq/uTW8RE6O0LcFiNc4H5PJagvy0/g849QozS4PguWmMI4iQRqNyHQTdojDD8+aGWhffw7BbkD7fN/0wXMiNRoOs9NXrlR4D3j12buJYlVVeafeyfPQ2woYMnkR/CVWLr0VSMIGtLNnqZtkmHUv0DQ1wcJFBaRGFbwEpE4HtNaPEpElO99IMSGdm/1pwSak3UruSZSE2SltaffwPdZt7o8hG1HedVljTqQzIXT+mEbt7dgKU0yGI6Nknzex/4Zilbi2gSS3Enzd9YUqtMiDtILwWiHSu6x8LU2qVAXnhibkWcSMmLeKfIU1yoWie0YiZVAafYscsTU5Fw5OeaQgD0kZMS6pMWKst917O0aJJLX2T6NUqnj4A1Kp+Hs+2Fk4AAAAASUVORK5CYII=",
                location: "third_8",
            },
            {
                resource:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAbdJREFUSA3tlr9Lw0AUx793SYwtCipWEHHRUsShog4KIri7OTn5FzjqvyFO/gkiOOnipODSVawIUhCRIl3EIrVoL+aeSYRwXIKE0DiUZno/73Pv8V444J8/5vPuH+qnxFDS2QPM2Bbknuh2DroB+KUE7ek+gB0wyA0CW9J9Nmebpm8MYERlPcCVyINF7ZKh5d20ipgcxqkAwmycDxiwuQ7JWu8Du97hYEqfnpojQnwGA6QSSqXJt1qtMabafNk0Bx3ORztCNIZ0Xz7vtj/E4DSEM6z75uYmqwFw9YSuhEOzekAa/YXY/NVK/YII63q+bdjFoKpWB4vLBRopj5Mek1h/7wCHtwZMC5FOqYeEzo0pia2Z9MCX9i9QPTxO7v21CFsaV35aG4HfgclI91ybR1chLUTNY4RrMP6o2nzZcox2JhV61e3GrYWUzlmkbP1W3db7wG539O/fUFqa94M+Ase5ns+59ZrJlHrvmTXvibGgAx3LPc4E6L2SFuLWwujIXO9PadhS4QKf33rXk+tfCXND4H7FxH4lOSBtZABsuigXhpFLe4iat7ODllHPbfsDotp9uViceP4BedCBDSYXmKgAAAAASUVORK5CYII=",
                location: "fourth_8",
            },
            {
                resource:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAASNJREFUSA1jYKAxYASZzzvl/39i7JHmY/BYa/7E4v///w3EqNfRkGNkgSl8HP8bxsRK911kYlh1jxmrHD5BJnyS1JCD+wDkQnzg+AtwaOJTglUObAEjI0PDhIuEvc/JxnCLiYnhx79/jA1YTcMiCLbguNuL1VjkMIRY/v3/zPCP+eo/JsbXGJI4BMAW/P/7+yoOeRThP4wQl///S1wqAmpmxB/wKMaTxxn6FkBSEQNTGFEBwMQMjivGv3+vEaUeqIjmQQRJRQz/VhHjIsZ/kNTzn2E0FRETXkSqgaQiZlZtYtQDi4pXIHV/mBmJKlpAasEWMPz7EwriEAL/mBgOgNX8Y3AgpBYq3wgug6/ceERUjcYIK4tIqNFong+GvgVExhX5ygCbykgbwJ3koQAAAABJRU5ErkJggg==",
                location: "fifth_8",
            },
            {
                resource:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAJlJREFUSA1j/A8EDHQELCC7+KbSx8ZP2QwMYAtB1j2O/01TW2UXsoLNZ6KpLVgMH7UQS6BQJjQapJSFHxbdo0GKJVAoExoNUsrCD4vu0SDFEiiUCdE9SOE1PqxGpsz9hHUzDkgj6uMX2rZnYP7m52FFNKKePH0BE2eQkZZggPGR2SAFyHxkNjFyIDV0TzR0txCcaOgZh3RPpQCNIDDyAWFIdgAAAABJRU5ErkJggg==",
                location: "sixth_8",
            },
        ],
        // 九画面
        9: [
            {
                resource:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAd9JREFUSA3tVj1LA0EQnbk7LwkSjYoiilEkREhEbLTTxlJQsBLyH/wDNuJ/sLW0srRIYWO0EG0EDSiKYIKmEWIT0Kg37qx34U7mkPhVBLe53Tfv5rG787EAfzyQ9aa3nJPaMw5L2oYFi6c5LBTPbxcJnXWJo5zsZceGVth2dlE6AMC4xIsYOG+xgcVmB14TU30U4K0emtDfgQkNGq/d4MBEgOAuCLHk4Up8nIg6vXXwa0e0IIMstjQaFFw7DtJ/YmX8hJNmfLS+YOMOOUA+3ln1EaCnvZkD+5yrBTn0G9Ho+4fFrquwzxDasTw8Ps35zI2pSXTvLRBhAUh5FEY0Wr8T4N+FdOJzUgPnmTB4Z5mR3krxqpwCh2YECiCY5Ux6cJdtxctyDohsiWd2xbb11nUFCUlq9xgrLEYObEqO1P87CteCirdBBGLimw9OofXT4n+HUox8C9NRyv3M32L8Hr2k5tB3o9Fvfp8THfnAPCCK9aluYc3Ha9GprjT8LOBOLe2Ra2MmnSzoCqKSWuIoLJ8dSy6zrXhevgGUO75ht026RRbjoc8CrxCrchVWQQJ3psTCeNaLYf7nYciVfR1u/SPVUcovYgA7Ih2U9yzg5sn9TOL4K4gOfRWNEi+V6rt5A2snk71PNE55AAAAAElFTkSuQmCC",
                location: "first_9",
            },
            {
                resource:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAJVJREFUSA1j/A8EDHQELCC7+KbSx8ZP2QwMYAtB1j2O/01TW2UXsoLNZ6KpLVgMH7UQS6BQJjQapJSFHxbdo0GKJVAoExoNUsrCD4vu0SDFEiiUCdE9SOE1PqxGpsz9hHUzDkgj6uMX2rZnYP7m52FFNKKePH0BFpeRlmAgxAYpJEYduhqQPronGrpbCE409IxDuqdSAHO2M/L0f4tnAAAAAElFTkSuQmCC",
                location: "second_9",
            },
        ],
        // 十画面
        10: [
            {
                resource:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAh1JREFUSA3tVs9LG1EQnnm7idIYNWopFC0aRSWEqnjoofTSWw/9B/w77L1HoYjQgrfepYiepAcvSmsPXsSDolEirUoTWhttE5smb3f65mnC7rqyOdiAJe+SyXwz++2bHx8LUOeDzNf1lqI9zfCoVu5fZTh4//jHN4nFZK05JPA4Eb//2eQEJtvPwXIkRIH5RQmQ6IIlCeevLEkrgQmXAYhiWpmTmpB9TLYzoZ4WcF58MmDrVBcmINIfFv7uf+dtEN54bRslvf0lrS4+KwgvddBZzyJEmoKirsc1IWsjy1UtCsJkUuKiCeEjG0qvr3+0ByH8wB6tUXt7J61KG8c8ITA80L22u3uUIANiTozJhAh9L9mFUaefbZXzMZU6TtqC2p2YQeHDwcF7aX1DVn0/IU6lvt61EGbIoqfOZL6ZgNKCZV0V73Q61y7BfkMWPHHlYFmLd2MPnVW5EbvuJdVTSkSGanaL9wrxeOxnNpu9UyiEq/vKMULE/vT2Qtkvp7+/4yyTyUT8cvr6sKgJt/e/JNVUzXoJm82W57+t/EskGHdhiPMm4SpPo8uv/nS2hZ+dnJWnAGjEiSmiucTQg1n95ghGq02Wa4w5WMpiCAEfqgq4MPUCG7ZBm97R55yLm5VGiNxrASjWGa97D/9/Qt1D/ki9/G7kMldPNArnuTy+U33cqDrZUEJskHloX8iVC+IJRsjPVXpWAQXCSsWu6+9fBP7CvJ3zjdYAAAAASUVORK5CYII=",
                location: "first_10",
            },
            {
                resource:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAjBJREFUSA3tVs9rE0EUfm92swVlk9giwUUQKizaqlgET/XiHyB4898Q9OrJm4hgQfDuSSTioScvLdqCIniw9UdMA1K1SmpihU2Tzcw8Z6ayzKYsSaDkINnTN+/73j72m/deAjDiB3W9j/W6Tzvx2d7ap04Gr99Xf4QMZTHFOey7y70Gx/aZVFwdVM6rDxubpxGcvM0Rw28z08EXVwd1McHFii3QuFLZOgogFgTRZZtDLu9zh5cFpyU7rnGt1iySgAeSxCWbQ2R31fkGs4OjwOOCB+6y6VIiclWDpDtRlQrDY7+q1YYvZcezKxcKbLdUKnWyclTj5Dlv5+wc34dWEAQtU3D989YMSL5gCzT22KGrsdy9pfp4zuYIqOwSvhAI9+y4xlOF3JXtP/FtJDyX4hAfz4bHH5qx0HPW2/pavPdlNKccSI8F4Bo5sEYiHdc5UeS5SPEFlZMeC8C3mh93qXbhQB9zh6B2o15XvW/W3bi9w8uo7szmGINlF7yvEuJ9OYwd6QBGT5DA3FmSp5pMY9Olk48oP40wn5B9QIND9fl882cso/N9pAntkLcZhqWa+cITCBc/NWGxOEGJIAtEXfWLMAWLqtgdIfYv76w8iV2zvPcsVarDOYJ313iWPonfXHVg/bcxJokNA8ZjMYxbA2nHlg5k0zCi/9/SZPDbauavv3T6uvOmjuBP9JVlCkzBRgs2ZifhaWWADZJXfxy6XXymd+O/dZX5cptgCEv2eWT4L+qazsxu+FwcAAAAAElFTkSuQmCC",
                location: "second_10",
            },
            {
                resource:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAhxJREFUSA3lVs9LG0EUfm82sUKINGIvoiBJDxqkHjz0IF5666H+Af079O5REBEUhB68i5T2VHroxdIq1It4EOvSRooGE/wRfyRpupnd57xpDLPLlrWB5pDOZd9735v5mHlvvh2ANg9kvr5VSg52w9P7ct/U4fD9xMWpxNpocM5wpv/L/vejEQSrx8RIYD6b7v8R4yCTfSvBh0SczJxQuyYBsn3wTkJ13pW0EUzK5UoPyYUVj9xJE0MUC8qf1oQMMNnXl2q1iDGzZcHepT6YiMxwWISH/1208wmbNfzbQxx+PLBp2yePgvPS6dR1LgcvpKzFTSyZhCr7LRMeHBxnXYRFc1G2i8Xi1E/XmUXAJyZWKuO68l+1TEgWpMilZ+aibFcqXTEkZ5yI/NcCcIfx/6hpWEH4UkeN7SJC4kFU1p9xXUPWRpar+ygIk0mJb2PQdeyBsxRcWojUL8DKayTQNWvihJ/Y1oRaiJU2NsEIg8mEiJ8JcN4EU4eGoG7b+NGzaNfELIodsa8JWfXDhNicYNq8MyZz3XDxluAtKwH3damHdS3end+lnb/DlqVNifdn/rubzcR2JtN7VSgUnrPEmZi+LirgC5oJUbZt50e5G4N5THZ+VZ8DcMZMDKG8pvyVlgk9Qfx28bU+E/zemTNGFMBQbDPe+U3T9h3qGvIjtfFu5GOOHkqIWRsbcuXL527UDdKo2R0oEDbu7LZ+bwHVjMX4NnJFxQAAAABJRU5ErkJggg==",
                location: "third_10",
            },
            {
                resource:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAktJREFUSA3lVktrU0EUPmducruQ9KGUqBshQqj4gCK0iyqCewVd+Qf8AYJuxb2IUMEfIVJx0UVxU2krKIUivkOaUhIfIfUmFW+T3MzDmblpuDNNzbVoF3E295zznTMfM/OdwwXY54WK72OlkhKbwWmbe+z40Vfv89+yBPmwgTnky9TSYe8YwoQR/43jbcHq+nVcS6gcRcYoW7Lzc7mvowDsARPiYhRDyqczCHOfqjB7ICmiUFe7QQFOHoQn6wBXNWHXrBjB4QEBb67J3XqsG4sO5Gr6MoH0yP3rcP8T6jdUagwFYt5gNnvkez7vXeG86UaRoSFSl/6FaCyurQmV9JUa7SJFFvD6banj8Si2sUlnpL8WjcW1NaHqM1v6aoPwZGJc2G0B+FbCeyL8T0QT9/7tPL8FcOuFY4d3+MsVhMFkGA4njZyNalzZmUqNSiAYvlkHJgSeexTyY4dg9l17gnTALkZqAKDVwqcK0oQJ6nrU0coz0tPpdLNWKy0IB5RIOisBbunZuepGwP27nWAPwxFuUbZCSEixcYpRMW/XqN5kCPcFM4c3h2CaQDDD2M4ae49tn2PrnrRv9r9K+/+EWqVyeL8sFKrmb4R84Uxm5Ee5XL7s+27YPm0FEDLSbNDS5LYg/uSrN/qwWjwhGDy0CwsFuFRnwR0UwVkDQ/8xQXhtxGI6mhDBGeSCnbdrKG0kZdOfkcPbwFDACjh7I+x/0ez7CfUbCoKfEYkaPcZKpWCr+hMfyXdcMQCBC45IFNvjyoB2c6TI5nfD/mn8FweD2JGemDtMAAAAAElFTkSuQmCC",
                location: "fourth_10",
            },
            {
                resource:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAjtJREFUSA3tVj1vE0EQndk7HylwHIQsi1OUAiKTbwtBQUNDR8G/4CfQ0FHSICQiRaKhgSJEEUVKGoIQRdJEFASITCCEBKQoMZZsJ453d9g5xdauic+Sha5A3uZm5725tzc3uzsACQ9kvU97e2kqH0+3a49dClfXi7/yAvWQg3li15fBgcSjKcdvJiZm5eOX7XEEb9DGSODOxMVwy2cniymp3tkEtjc2fmYB1KwiumljKPVj6cmXStKy7Wd7c7M0RArmNKkbNoYoHpr5XWE7k7D7gv88y1GVEpFvCsStRCOVz1/YLxYP0lrXA1s5kxGHuVyu3inGFM6glEcpOyadhloYhrVIcPIZFc4ALdmEOHvAx+dPr/x4oRAexfEcDHFhMj/8JNoWgYDsVhlG7l3TDue0ydJXBAlQIA9ekXK3y2n8pg8B19iOBNlIeQB3xrsLfi558OE3R/Q2+tuit7zFRPVTGpOc3qDEU9rah0QAO9Xuq642unPiGC3BmkS4vugcfx3jprNmdT2OSHA0Ba+/peCvw7vTO3drWB8bHW7w7d6J0+4X4lydfdHhvV78PsVtQTtpwD97+1BV7iPBVQdDXPQJ30jQs47fTM5nglv75cYD07gUbMwIzU9cHpmLvpAbnvYehMl8xZhDd8ZcX25/QrCmPXpvFun4OaZaDcw7jwumJlwMxSrjiVfp/y8Y/UNuUk/6Rk5za3BbUKrgQvPybAGEbz3ytzU2uNd0BlcjQmUeTv5ZExQIy0070ecfYpLAKOGLCr0AAAAASUVORK5CYII=",
                location: "fifth_10",
            },
            {
                resource:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAlhJREFUSA3lVj1vE0EQndk7mxQY24osQ4QoTGTFkGDxUdDQ0FGk4D/wE2joQkeDkIhkiYYqBaAoRUoaEiEK3CAKApyMIXISkKLEGNlOHO8HNxuftbeJ46TAhblm582b3dHevN0dgAF/SPm+bG7GVG1vys49cXGsODkHl6MMUjbXC49H4M3Da5UcgnPGjFEM1y9lxlZdclIywcU7M4Bsz/uZOgVnF1drcCHi2GwYKwXQ5Ag/IpCYEVCQStwyIxDZYx/f1wlN4jD7wQ0J93LyMKrrW28A3JyPdHEvg/Ui/pV/+BPqGpIaSSD2b8xmz21B0VfDCb8R9/Q057uhgsZi0KRldMKV0q8sgJi11y2Vtu8CJG13X7wj6jMIeMUMrNbxlY+f6YQMZUIoddsMIFvKVtT2HQejgutKqfCxAPxAc/8T0fT7TYvfEb5Wj75qGu1+q+zz+zeNwzaQy6f2lHic7Yy4OMcB8p9+2+xBPJVSsNHEFiDO+3XUNetGKXxLtk7o8ug2d/hCl+wY6XS69fzq2kvlwGub64Unxs+3PQ+XpaM+mjGOciuEdUKOu5OCqyUzgGw6mwLhiRIHFWzHBrhcriY4yFklIKRSiW19eQ+/Sod/h1o0/uX9noodFD4YM5nknxVvLYDHHkfj0TuNRlSvHUxiLNkiWzs/f6vkfFUVAjIYy2WYDuyTjFu19iOAvbw5B6H+wscFnZAaHrsHoWD7iTEXONpWeb/HCR0LQFakOcMvmoHvUNeQmtRO3xgqDbUF9FL7r3f4Ig5FhQGpUQukU7OAZQhLgT3Q8S9SkMDXORzGlQAAAABJRU5ErkJggg==",
                location: "sixth_10",
            },
        ],
        //十三画面
        13: [
            {
                resource:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAmRJREFUSA3lVs9rE0EUfm92E4tp1Gi9FJU2Eayh2EMPHsSLNw/1D/Dv0HuPgoigUPDgvUjRk3jw0iIK9iIe/NFQI9qKCf6I1aSNm919zjcmYXa7klowhziXvJlvZr7Mzve+eUR9bgy+kduSPTpEp3fK/aNFbx+c+frJ5+ZkfM1EYfTpqzdrJ5mcfTYmij8U86PvXAyCbLVGDzMpseckxk2fqDhC933avBr4shifVC7XDkhAc6EEZ22MWV3T/UuGEADIXl/Uu/Vol5849OKb+TA9ZibDKnn4340OPmH3Dv/2I04cP/K4VPp4OL4un899L5dpxvebKRvLZmkT/V0TrqysFwOm6/amiKvV6oWtwJtl4lM2VqvzHd2/tWtCcSgngZyzN0XcaKRdFm9aRKJpQfwM+H8kGjgIkrpXW64yZfb0mvVn3NwhvBF2tRMHAZnv8z2X0usheTfiWyuV+0ncWGAhc2ddXPgRYkNojFh7YxdsB5A+1AiB2BjIlEp9VuTdtccRj41Rq1TipdCR5zbmiLuGviGE6ycZMfIM0o+rEScDWRAkm7dP4U1t4BGVhtwy5j34Kh38E5qXVNuQo1/qYVtViGHE2hv3wq5sDNKHGpPWFAoHNyqVSiZpzfg4Nw3hy9X3kygL7E0RD7nDM1tBfVbn1HQEY15whZegxsi47hzanz7/ZaN1hUimbEwTzRdPHJsz/xwFT7wGwWQ8MXD9bUaskxp5Fpc+1vw+mTclEk0LYrUMfPBF0/cTmjtEkdquG/GZuw1lAV5qfY/bjBje2Lar7nwEUDBTfb5zZx1QMS124r7+/gLMd/fRpg+V4wAAAABJRU5ErkJggg==",
                location: "top_left_Big",
            },
            {
                resource:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAppJREFUSA3lVc9rE0EUfm92sxXbtGmLREW0TSQGjZYieFERvHnwoCf/Af8AQa/iURAptNC/oYhUPPQgXlraeihCEbVoiC21rSakzQ9JmmR3ZseZ3STsbIMNIjnEueTN+96bb2fe914AOrxQ8n3JZoO8aF70c8ejJ1fWUukYQTukYBr5cXX5eO4MwhXF/4dNbh++bd7HDV3GSDJG2bI/Ppn8eQyATTHOb3oxpPZkBOHN1zzM9Qa4F2ppVynAhSF4tQlw1yFsGdWGM9TD4eM9cdoh68GSBsmC85hADon953D3Ezo1lGp0BaK+YCx2Yi+Vyt2x7ZrhRQYGSEXsb3h97doOoZS+VKM/SZKZduWx0PG4F9st0lmx3/D62rUdQtlnfunLA9yb8XHubwvATwL+K8L/RDTtvr8/rmwBPHqn+d0H9u+zCP0B1+1OGjEb5bjyR0o1SoGgW7MmTAgs5Cik4sMw97k+QZpgCyPYA2BZ+FpCDqFOjRzVHOUp4eFwuFYobC9yDaRImksHY/vttfyuaZefNZ11I3721FIyuZOwCVcGvsaNLdEKLiHFaoJRPu9Plr3JECY4U4e3DeYkAXOWsYM56+v5EAV7ijO47j3PRuu52D/sfpV2/w2df0UxujRR7D5vkaUdiQz+ymQyR8tlw22fegAhg7WREbBa5USjQ8V0Ot3bKmd0FKsO4Vrqe0KoatpPeETvu11hpSfI4bKCIb7UOS5INSp+sRkeMG7tFa2nYuCPeTFBNHP+3Olp58sRtH6bM0XGMpjSakA0/SXxAgomPmDV1vgHv/Rljnszc4xztS0AyYrEu180Hb+hU0NOcAeRyNGjrGAQ9vMlfCHquKoAHBc1rm/Vx5UCSQUjlGYaNWuABGG+YXf09zftYgU4hpEjqwAAAABJRU5ErkJggg==",
                location: "top_right_Big",
            },
            {
                resource:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAoZJREFUSA3tVs9rE0EUfm+zjSCmSRANhp5SCLZqoQjevHi3oCf/DcGzePAqggXBf6FoPHnwIkr1oB48WH+lMSBWa2xM0mKaZp3dcb7JNsxsTJpCyUEysPDm/diPnfnet49oxIuB93FjIyE3vTNR7JPT2VfvSz/yDgcpKxZzvrsiXhO8c9ryq42qefnh89cZptikGZMOf5vNZb+4cALMF/4LMwF2sbh+jMhf9KW8YMZYBHdETBR8IZ+aftjlcj0lfbobSP+8GWN2bqn9Ncd0jsIeAx74KWuWSildRRCbiQoqnz/xq1SqJYKgHTeRk0mnlclk2v1qFHEmhdiZMGsSCdrOZrPbGvDd6vosBWLRTIAddw5f8oLWdcXjeTMmSRZcycs+023TD/tocmKhuuXdZMlzVox56VR+6p5uC/RZlPpI7nyZnFcnYLcF8YqM0Yr0bT9qms24y9I7q2rstiB+g/iYpTiFA136DklpI+Qq+mawsbopCqzuzIw5Dj1zKb4WkNdT4zjpNnHzPkvSd9atUySDrQG1ECtt7AZDA9RvNNaWQRAzBrBzT45Xp4/QY9Mf2opgUyVl4+mumker2GhAqP6/hBjiDepH2YgvA9inunyUOtR9Z1+j+YdoJk0Py0SXO0faN3VwAGBvr4jBSSp69XmMig3d8uO22PO09p2g7xBjAf7U0epcLr1VqVQWIFdmTFOfyJI7Mz7I1i/CDIKxIJpYLtPFlu/dgDZaMdVnIfUt9zAbDYiBJzqDoBi/GNX0cz1C3Glqq8+GAUPO/y/eFhmGPZbdPCgImnqv9fonUzKcGTQghtRwbrRqMRbUf/OSusceIYY2Qq52FcQqjGwA1gr4QcQ9mu1f4QgGAKPUJaAAAAAASUVORK5CYII=",
                location: "bottom_right_Big",
            },
            {
                resource:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAqFJREFUSA3tVs9rE0EUfm92m4KStLZINBQsjYTaVksRvKgI3rwI3vw3BL168iCICBYK/gciEvHQg3hpsRUsgoitP9a0IrU20DQxYtJkMzvPedskzsYYg5QcJAPLvHnfe/sxM997uwAdHsh877e2wpR3jzdyj8ZjS29T6YRA1R/ALPHVlqGsxNJEwK8XOufFu9X1YwhWxMRI4MbYSOyzzU4m86S3aAaw7TibBwG8aY/ovImhVHelJZOepDnTz/baWq6fPJhR5J01MURxW6+vCtPZCbtLuOen7KuUiGwtkKASNVUicXg7lcqGlSqHTOa+PrETjUbLf8rRwolIWeoxc8JhKMZisaJPuPJxcwyUnDYD2A6JfZdctXNd63jKxAgoaRM+8xDumH62B/t6Lma+uzeQ8EQAQ3wwnhi655cF11mj9Dl4d2c0pU8gWBaAy2TBMnlBP+cUCiEbyT2pc4JlAfiK8a5K+RT2dPh3CLo3crtqfDOrMZOXSdR3ZmJCwLwNoS8K3N9yhDhQBiw8RAL/zup5WmRs+4SnFw9lRxCe1MFfxjltfqo+dW9WQurpmVxGgJusO6vG8DBUHAfnlUWvTcwie53XPuERhFMfcjDb30tmTFO7UNFfhEGYdVXhluc1b94S1LRu4AGVKqz4zXv3SPWr9/cQvLksm5KYzmvPLVj55pev6W7b7pZF20fVbmD9DttNqMWNHh1a4K97bV2b4/GBfDqdvsAtrubj2S8XPQecZsDfbMfZmGA1NsYx2Xa+chPAnTQxhB/39XrmnwmVIP53CUifCXZ35k4SNWAolhj//1VaP9KSrvkrCxbvuuV4uYUQ7m0Z0hL0CbNFWB0fgEdOGx0kon8cKhV8bFFovdquAgSsRl8g1TurgQJhrmZ3dP4JsNUFGQrgFq8AAAAASUVORK5CYII=",
                location: "bottom_left_Big",
            },
            {
                resource:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAoZJREFUSA3tVktrU0EUPmfubZDaNA0iiUEKjRBtrO2im27cuHPhwn/gQvAP+ANcuHAjiIGCO8FNKeI/ECriwiJIF1apsaAh9kJpQyRpHp17j3MmD2amD7MoWdQOlJxnv8zMd74MwJAXMt637e04Vds3XOxrVzKr68UgJzCasHKe+O3L2K7E5owVV47q+fj1R2kawRs3cySwnM9mfvocZLBQhh/MArY3NrYuAoSFkOiWmUMZPZeefBNKWjHjbG9uViYohMWIwptmDlE8Vf5DYQaHYZ8Bnvgpa5YSka8IYjNRQeVyl3aKxd14FLViJnIiIRqpVKp1VI8izriUzRGzJx6HvUwms6cBv3zfykMkC2YB2zExevfep+TLhoR5N3eUXybMv10oPUbCWasGcfl67vILPRY8Zy71uZh3xmDZBE0upMnqd51qC+DZmgf+CPhIMK9OzR4LwM/cowHdZtdnsPvTkRu2/HK9A2gFD3FO/1h0jlRpI8uVewLMRjc2kI/4Wt2jvrN+PeF7tjWgFmKljf1k12DqK6V1w//0fcJ3kUdrZqFHfol9Dciqf5gQd8Q7bfYNZEuICkrALZZGuP+fiPdAc8hDzXN23Ao6onVcic4NBMgKwn8nsXri7SnBHXP/YTab/JN+BaPtxmCKxP2VB1gNguB8vR6zNiNEsjU1hU0NuF78NcPPAhfwnD92pxHWHrE2Wjk1Z0x9ZqMVV86FROz2TnX/iRqnOTOngJbyVycX9bfgB4/7BuFi/olBwNkDQqyGmufMpT73dHbWniOyxwJQrHL+9Gvp0Heo75Afqd13Ix9zf/GzoFLDZXWPB4SYtbErV/16NpiNCLWl3p31kgJhpWcP9fMv6Zn+tzp3hmIAAAAASUVORK5CYII=",
                location: "center_Big",
            },
            {
                resource:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAALpJREFUSA1j/A8EDHQELCC7Pn75jWGl7EJWDDFSBB7HY5rJz8PKALYQZNCTpy/QzJNlwKYJTRFWLsix6ObJSEuA1TJh1UFDweFvITwOYWFMrdDEZR7YQlDqoTbAZSbObMHAQJkjsGU1gtmCEl+PZgtKQo8kvXizBSXlKa5swThoagtQOIGSMbbkjU+OkB54kOJKxiDDiZVDDkZceoZ/4Q1ONKTGEyVxOJpKQaE3mkrBoUAsMfxTKd1LGgC0rnzxd+7NMgAAAABJRU5ErkJggg==",
                location: "top_center_Big",
            },
        ],
        15:[
            {
                resource:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQhJREFUSA29lTESgjAQRbMRS4+ArTra6SG8hZ02HsdGOq/jaGdhrYUHsFSJbBAq8phxgMwwLHnk/2w2kxjTchPVH+ycC/k8tyKX662Sz8bDIFM95VEhfF+9irB8x4d+Gf8blAZNiFVNwhscl49FFdS+Sfb0oijIiel4b/B5v0/6EWgCnJjKiQ2INtbtM8i20pkUiRNTzbzI1iZkYIgTKwxcmu7BIAFOTCWTjmoggkskwIlpCnkNNPqzTUfxhoZ6A+fcGn7aAEdx1eyoBtbiTKSGQ/a/GqQpLVFiwhw3hxrnNTBmTrPILgPkNLabGtQduXWcMvBLBMexjqUj2V+5ZND6ErVuQNk1wr5SIkpsrQmNPwAAAABJRU5ErkJggg==',
                location:'fifteen'
            }
        ],
        // 十六画面
        16: [
            {
                resource:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAshJREFUSA3dVjtvE0EQntk7W1ES44QQWbICykMKYKJEkQsqGjqKIKXlB/ALqBEFBQ1CIiISBX0URf4DNLZSQYOQwkPGWIIkxAaHPOTEibN3y37rh/ZsS2mCC29xNzvfzs3N7TffLVGXByPflTcqcrWPbrfmjsYp/WqsMC3YHwpgjvjlyvBfySczAb+e3JiKv/vyffMmk3PJxpTg7cRk/IcLJ5Ll9ujtQEiZNUrfjiVTpEyjFJdLnlJ37WCW/kvpyJQnVdr2w87n94aUR8u+8u7YGLN4ruePTEIASPb1gTRrfleIkqshY1/0RVz0A897XrNCfEZUhvGnfq/NLvbaTIg9+1+f0X5lkxBsNASxEW1vP6TdXK5/0fdPwzYUjYpKLBY7zWZ3Rm0/7MnJ4cN8nhakPAmQIBKhY+CmLT5920mQL5fgsEdY9C9W/cpjIjVv+xWplKt43WN6Yfthj0RD90uH1aeseDaAMa/emh57bSpEn7VSH4trlal51doWxBvKoQ3lBdsFMUdHYZdVNaljgm1B/AF411na+wlrbaG1EXKFb2wPsLF0IFOs98z2C0EZl8JbPlXbYoQYPiU+WmNFZs+acZpksE1CI8RaG5tg3QD19/e31kEQG0MyIUIlQdW2mPFxOstmOeM76qMd4yh3E3OTEKrfSYjRZ6B+KxtRGZJ5XmfxluQvaQEPsNTnMyPevU+a3q/QaKmWIUf/qQdtVsGGEBeLxX7IlY2B+mBjp5ipqcsHhUJhoFPMxASfmISfcz9ncCywHwq7zx1cqHjlJ7qnkgGMeU2LdwZsDPj1ZCQavrd7cPZMC/6cjelEK4nr15bNm+PA03oGwWL8YnTTz7YJsW5q9Fkr9RFTq6w6p3/ogbYgFu+B9z5pul6h2UMcUuvnRnzm5sCxYK/Mq3of24QY2liXq+Z6GGAwU3mlsWcNUDClG3ZX7/8Atroo/xt0nRkAAAAASUVORK5CYII=",
                location: "sixteen_full",
            },
        ],

        // 十八画面
        18: [
            {
                resource:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAKhJREFUSA1j/A8EDHQELCC7+KYSZ+Pj+N/EKcShip+HlQFsIUj+uMtjHMogwpZ7ZBmePH2BU42MtARBeZBmJpwm0EiC7hYyghINPeMQbOHHL7/xhj8odImJI0JxDEo0dA9SulsID1IaJUoUY1HyIb7wp1Ycgsyhe5DS3cLROERJZdTgjMYhPBSpUZaCDKN7kNLdwtF8CE801GIM/zgEJxpqBRcx5tA9SAHC83IYubFPCgAAAABJRU5ErkJggg==",
                location: "eighteen_full",
            },
        ],
        // 二十画面
        20: [
            {
                resource:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAftJREFUSA3tVbFO3EAQnVn74BSUBBpEFAndXRWUFOmidFemTAMt9wv5A+cHohR8ADUQiU9wF4kqkZIjBTqsIMgJCg4JHHO3O8OO73ZtIVHF7rKFd+f5zTx7PHoGqHmh1H+8xex0nj+Bd3tvTleAadthai5s0djYmLtTDGM1F/RorJNpbK+oegjcYubIYa9erKJywcnmBD68Ni6sbPcClVW8V8gLfPqu4Osw79g9yr+FoaRL33cGQV4pvYaDBsCqRoxywF7muTn6i+m2lY8FY8BEsAxvIoll2ULfSEFCVOTNcIAvb4cnOUuIxEEYPko03e46rNNZSg+Ps5gNLgimAr7ptJfS/lHBCdX8qdZZgxReuDzZ8578+PXbTxHaJ5cnrHyKyqpVnv1HrrJouVbtAvkUIagNr6qCn/IReQweW2zCxZWBiIxaFp69f/7UYpfjIg8b6kCGAI3p+1rCLQd1nPM3YKAdVxyJIzvLCUDhRaNMtci+gcW6wjMG41EGvXIeT2DqRVB4kaUWXiSJdazaW1S7wHSKgsZL1x5rFedh2JxkdOuxtfbK2eHxn56zCrRTttZ+dtY/GnpOc2YVOsBdV0v2XABIrzvQGlasdTqylvbeYYPB5WfS1JUfimAyBBbbL+dpMvukeBEIusKZrY//vci14sG99il6ULmqG3cUFu6I0cmhVAAAAABJRU5ErkJggg==",
                location: "twenty_full",
            },
        ],
        // 二十四画面
        24: [
            {
                resource:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAfpJREFUSA3tVb1qG0EQntnbQ44gBneOAy4CAWOnsx7CTcq4TSe/RvICgYCb6BHcunRKV8FXBOwQCFxhg+TCoMacJO/PZGdWtz4R3N25yhSa/WZuZrS3330L0LEh9395TFTP+XEwGThrLxiHZAFKjcj7b4IRR+yJaChYqSPwfhiK9xlnWqdaxu92tlHxgu3mo4mLln/TgJb7pnZpwJefaZmSbSw0N3m9DgcnZcYeSOdjdO4Tx8O7HStUBSAJVogFx32Is0dUFx6JwlltMW7WMmaTQ776M9mNEKCvN8vK3r5hnDmc9Xq9aWXn0gBzPeU4GbvBvq/XxovFYsNl9CLix1rGe29f/ZIdkDNXHGCb42RALrLIBRZVxiYWgbcrLKrIHYX9DMlFFjVrYzd4ZNEy0Lrr5mQbf7PzAXIGCOqwHtrP++W9vReMCqcadGnACFaZKvk5b/139jnkhVW2BE/x0Bu1nGd7nh0Q+JM4D6Ay1SBhD4VRNApYtMg7iiyCqEVhZytatFIbG/5nUf1in/aRRVm+Vz+yloXPnW4Fi1TkIhXnnK+lAoz9yngpFWe1VDRrOc8mAwLvPkQIMMO7UY0twjhQsgDv3nMeH5yIXbhw5IKZ2dmpR7ePPopds3bZ77OI3eXv63SjNW+lVm+0egdt+84/tM4HtP1G/un3F1AvAIIN1woRAAAAAElFTkSuQmCC",
                location: "twenty_four_full",
            },
        ],
        // 二十五画面
        25: [
            {
                resource:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAUJJREFUSA3tVktOwzAQfUaVUhKULiCsQIXeoRwIWMEF6IaoG8QBYFf1QHAH2PNZBJGgrkxepJk6EqQBSlYeKZrJy9hPHj87A3RsRvjiGzuVWHx2LtF6vDEm7XGq+Nam1uLydJTpzLOHGFd3Bi6WbMcoB+HpZZn3E8yWJBUhWY4PM5yM3pSQQV4EeH5dYuFmgOJjUcOYF4Xt8nZ3BtjggC6tc0It6fxxUFso3y/GwMF+ongU9rEV9asSCkiM1javIszOgOt74D0PZB5MxhaTIwpkoRj3kKLJi99jukKKxhXIcC+pyFzMi0Zr3xBoSXlGeJ7EvhPIWkQjJH8RQ9uxukJeV6sE4kUjW9PktaReNCyTF02TWOSbF83K24el8j2NCIa+Jhr3A39DfFz7CuMNRWN/KtaUp5132aSmMuC/fNkPTT8BWdXo6mP8t+MAAAAASUVORK5CYII=",
                location: "twenty_five_full",
            },
        ],
    },
    fullscreenSvg: '<svg viewBox="0 0 24 24" width="20px" hseven="20px" fill="#666666"><path d="M19 3c1.1 0 1.9.8 2 1.9V19c0 .8-.5 1.5-1.2 1.8l-.1.1c-.2.1-.3.1-.5.1H5c-1.1 0-1.9-.8-2-1.9V5c0-1.1.8-1.9 1.9-2H19zm0 1.4H5c-.3 0-.5.2-.6.5V19c0 .3.2.5.5.6H19c.3 0 .5-.2.6-.5V5c0-.3-.2-.5-.6-.6zm-7.2 8.1v5c0 .4-.3.7-.7.7s-.7-.3-.7-.7V15l-3.5 3.5c-.3.3-.8.3-1 0-.3-.3-.3-.8 0-1L9.2 14H6.8c-.4 0-.8-.3-.8-.8s.3-.7.7-.7h5.1zm5.7-6.8c.3-.3.8-.3 1 0 .3.3.3.8 0 1L15 10.3h2.4c.4 0 .7.3.7.7s-.3.7-.7.7h-5v-5c0-.4.3-.7.7-.7s.9.4.9.8v2.4l3.5-3.5z" fill-rule="evenodd" clip-rule="evenodd" fill="#999"></path></svg>',
    videoSvg: '<svg width="20px" hseven="20px" viewBox="0 0 24 24" fill="#666666"><defs><path d="M14.197 4.273c.801 0 1.452.65 1.452 1.452v2.786l3.119-2.59a.53.53 0 01.867.406v8.597a.53.53 0 01-.867.408l-3.119-2.59v2.785c0 .8-.65 1.452-1.452 1.452H1.453A1.453 1.453 0 010 15.527V5.725c0-.801.651-1.452 1.453-1.452zm0 1.058H1.453a.394.394 0 00-.394.394v9.802c0 .217.177.393.394.393h12.744a.394.394 0 00.393-.393v-3.915a.53.53 0 01.304-.48.532.532 0 01.564.074l3.118 2.59v-6.34l-3.118 2.59a.53.53 0 01-.867-.408V5.726a.394.394 0 00-.394-.394zm-2.853 4.708v.804a3.55 3.55 0 01-3.547 3.547c-1.19 0-2.24-.595-2.883-1.497l.53-.53a2.803 2.803 0 002.353 1.286c1.218 0 2.257-.78 2.644-1.864l-.497.424-.481-.565 1.881-1.605zM7.798 6.862c1.19 0 2.24.594 2.883 1.498l-.53.53a2.803 2.803 0 00-2.353-1.286c-1.218 0-2.257.779-2.644 1.863l.497-.423.481.564-1.881 1.605v-.804a3.55 3.55 0 013.547-3.547zM9.386 0a2.12 2.12 0 012.117 2.118 2.12 2.12 0 01-2.117 2.117 2.12 2.12 0 01-2.118-2.117A2.12 2.12 0 019.386 0zM4.435.834a1.59 1.59 0 011.588 1.588A1.59 1.59 0 014.435 4.01a1.59 1.59 0 01-1.588-1.588A1.59 1.59 0 014.435.834zm4.95.225a1.06 1.06 0 000 2.117 1.06 1.06 0 000-2.117zm-4.95.833a.53.53 0 10.002 1.06.53.53 0 00-.002-1.06z" id="camera_svg__a"></path></defs><use fill="#000" xlink:href="#camera_svg__a" transform="translate(2 3)" fill-rule="evenodd"></use></svg>'
}

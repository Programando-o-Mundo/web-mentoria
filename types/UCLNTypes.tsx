import { TbLambda, TbCpu, TbCode, TbSun, TbSunset2, TbMoon } from 'react-icons/tb'

export enum CourseNames { CC, EC, ES }
export enum RoutineNames { MATUTINO, VESPERTINO, NOTURNO }
export enum CampusNames { Coreu, Praca }

export class MentoryDivision {
    public course: string;
    public courseIcon: React.ReactNode;
    public campus: string;
    public routine: string;
    public routineIcon: React.ReactNode;
    public courseAbreviation: string;

    public constructor(course: CourseNames, campus: CampusNames, routine: RoutineNames) {
        this.course = this.getCourseName(course);
        this.campus = this.getCampusName(campus);
        this.routine = this.getRoutineName(routine);
        this.courseIcon = this.getCourseIcon(course);
        this.routineIcon = this.getRoutineIcon(routine);
        this.courseAbreviation = this.getCourseAbreviation(course);
    }

    private getCourseAbreviation(cour: CourseNames) {
        switch(cour) {
            case CourseNames.CC:
                return 'CC';
            case CourseNames.EC:
                return 'EC';
            case CourseNames.ES:
                return 'ES';
            default:
                return '';
        }
    }

    private getRoutineIcon(rout: RoutineNames) { 
        switch (rout) {
            case RoutineNames.MATUTINO:
                return <TbSun />;
            case RoutineNames.VESPERTINO:
                return <TbSunset2 />;
            case RoutineNames.NOTURNO:
                return <TbMoon />;
            default:
                return <></>;
        }
    }

    private getRoutineName(rout: RoutineNames) {
        switch (rout) {
            case RoutineNames.MATUTINO:
                return 'Matutino';
            case RoutineNames.VESPERTINO:
                return 'Vespertino';
            case RoutineNames.NOTURNO:
                return 'Noturno';
            default:
                return '';
        }
    }

    private getCourseIcon(cour: CourseNames) {
        switch (cour) {
            case CourseNames.CC:
                return <TbLambda />;
            case CourseNames.EC:
                return <TbCpu />;
            case CourseNames.ES:
                return <TbCode />;
            default:
                return <></>;
        }
    }

    private getCourseName(cour: CourseNames) {
        switch (cour) {
            case CourseNames.CC:
                return 'Ciência da Computação';
            case CourseNames.EC:
                return 'Engenharia da Computação';
            case CourseNames.ES:
                return 'Engenharia de Software';
            default:
                return '';
        }
    }

    private getCampusName(camp: CampusNames) {
        switch (camp) {
            case CampusNames.Coreu:
                return 'Coreu';
            case CampusNames.Praca:
                return 'Praça';
            default:
                return '';
        }
    }
}

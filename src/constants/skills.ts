import { IconType } from 'react-icons';
import { 
  SiPython, SiJavascript, SiR, SiGo, SiGnubash,
  SiApachespark, SiApachekafka, SiApachehadoop, SiApachehive, SiApacheflink,
  SiPostgresql, SiMysql, SiMongodb, SiRedis, SiSnowflake, SiOracle,
  SiAmazon, SiGooglecloud, SiDatabricks, SiGooglebigquery,
  SiApacheairflow, SiTalend, SiInformatica,
  SiGit, SiJenkins, SiDocker, SiKubernetes, SiTerraform, SiAnsible,
  SiTableau, SiLooker,
  SiScala, SiElasticsearch
} from 'react-icons/si';
import { DiMsqlServer
  } from 'react-icons/di'; 
import { VscAzure
  } from 'react-icons/vsc';   
import { 
  FaDatabase, FaNetworkWired, FaWarehouse, FaWater, 
  FaStream, FaClock, FaLayerGroup, FaChartLine
} from 'react-icons/fa';

export const iconMap: Record<string, { icon: IconType; color: string }> = {
  // Core Data Engineering
  'Data Modeling': { icon: FaDatabase, color: '#4299E1' },
  'ETL/ELT Processes': { icon: FaNetworkWired, color: '#48BB78' },
  'Data Warehousing': { icon: FaWarehouse, color: '#9F7AEA' },
  'Data Lakes': { icon: FaWater, color: '#4FD1C5' },
  'Data Pipelines': { icon: FaStream, color: '#F6AD55' },
  'Real-time Processing': { icon: FaClock, color: '#FC8181' },
  'Batch Processing': { icon: FaLayerGroup, color: '#68D391' },

  // Languages
  'Python': { icon: SiPython, color: '#3776AB' },
  'Java': { icon: SiJavascript, color: '#007396' },
  'Scala': { icon: SiScala, color: '#DC322F' },
  'R': { icon: SiR, color: '#276DC3' },
  'Go': { icon: SiGo, color: '#00ADD8' },
  'Bash': { icon: SiGnubash, color: '#4EAA25' },

  // Big Data
  'Apache Spark': { icon: SiApachespark, color: '#E25A1C' },
  'Apache Kafka': { icon: SiApachekafka, color: '#231F20' },
  'Hadoop': { icon: SiApachehadoop, color: '#FF652F' },
  'Hive': { icon: SiApachehive, color: '#FDEE21' },
  'Apache Flink': { icon: SiApacheflink, color: '#E6526F' },

  // Databases
  'PostgreSQL': { icon: SiPostgresql, color: '#336791' },
  'MySQL': { icon: SiMysql, color: '#4479A1' },
  'MongoDB': { icon: SiMongodb, color: '#47A248' },
  'Redis': { icon: SiRedis, color: '#DC382D' },
  'Snowflake': { icon: SiSnowflake, color: '#29B5E8' },
  'Oracle': { icon: SiOracle, color: '#F80000' },
  'SQL Server': { icon: DiMsqlServer, color: '#CC2927' },
  'Elasticsearch': { icon: SiElasticsearch, color: '#005571' },

  // Cloud
  'AWS': { icon: SiAmazon, color: '#FF9900' },
  'Google Cloud': { icon: SiGooglecloud, color: '#4285F4' },
  'Azure': { icon: VscAzure, color: '#0089D6' },
  'Databricks': { icon: SiDatabricks, color: '#FF3621' },
  'BigQuery': { icon: SiGooglebigquery, color: '#4285F4' },

  // Data Integration
  'Airflow': { icon: SiApacheairflow, color: '#017CEE' },
  'Talend': { icon: SiTalend, color: '#FF6D70' },
  'Informatica': { icon: SiInformatica, color: '#FF4D4F' },

  // DevOps
  'Git': { icon: SiGit, color: '#F05032' },
  'Jenkins': { icon: SiJenkins, color: '#D24939' },
  'Docker': { icon: SiDocker, color: '#2496ED' },
  'Kubernetes': { icon: SiKubernetes, color: '#326CE5' },
  'Terraform': { icon: SiTerraform, color: '#7B42BC' },
  'Ansible': { icon: SiAnsible, color: '#EE0000' },

  // Visualization
//  'Power BI': { icon: SiPowerbi, color: '#F2C811' },
  'Tableau': { icon: SiTableau, color: '#E97627' },
  'Looker': { icon: SiLooker, color: '#4285F4' },
  'Analytics': { icon: FaChartLine, color: '#6B7280' }
};
